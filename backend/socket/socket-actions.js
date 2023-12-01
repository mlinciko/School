import { socketServer } from "../socket-server.js";
import { Server } from "socket.io";
import { ALLOWED_ORIGIN } from "../config/index.js";
import { db } from "../index.js";
import { GET_MESSAGES_BY_ROOM, GET_COMPANION, MATH_MESSAGE } from "./socker-queries.js";
import moment from 'moment';
import _ from 'lodash';
import { botResponse } from "../services/chat.service.js";

export const io = new Server(socketServer, { cors: { origin: ALLOWED_ORIGIN } })

export default function startSocketActions() {
  io.on('connection', (socket) => {
    console.log('user connected');
  
    socket.on('join-room', async({user_id, room_id}) => {

      socket.join(room_id);

      const messages = await db.query(GET_MESSAGES_BY_ROOM(room_id))
      const companion = _.first(await db.query(GET_COMPANION(room_id, user_id)))
      io.to(socket.id).emit('join-room', {
        companion,
        messages
      })
    })

    socket.on('message', async({message, user_id, room_id}) => {
      const user = await db.query(`SELECT * FROM User WHERE user_id=${user_id}`)
      if (user) {
        await db.query(`INSERT INTO Message(time, body, user_id, room_id) VALUES(
          "${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}",
          "${message}",
          ${user_id},
          ${room_id}
        )`)

        const messages = await db.query(GET_MESSAGES_BY_ROOM(room_id))
    
        io.to(room_id).emit('message', messages)
      }
    })

    socket.on('join-math-room', async({user_id, room_id}) => {

      socket.join(room_id);
      const companion = _.first(await db.query(GET_COMPANION(room_id, user_id)))
      const messages = await db.query(GET_MESSAGES_BY_ROOM(room_id))
      io.to(socket.id).emit('join-math-room', {
        companion,
        messages
      })
    })

    socket.on('math-message', async({message, user_id, room_id}) => {
      const user = await db.query(`SELECT * FROM User WHERE user_id=${user_id}`)
      const companion = _.first(await db.query(GET_COMPANION(room_id, user_id)))
      if (user) {
        await db.query(`INSERT INTO Message(time, body, user_id, room_id) VALUES(
          "${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}",
          "${message}",
          ${user_id},
          ${room_id}
        )`)

        if (message === '/help') {
          await db.query(`INSERT INTO Message(time, body, user_id, room_id) VALUES(
            "${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}",
            "${MATH_MESSAGE}",
            ${companion.user_id},
            ${room_id}
          )`)
        } else {
          const botResp = botResponse(message)
          await db.query(`INSERT INTO Message(time, body, user_id, room_id) VALUES(
            "${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}",
            "${botResp}",
            ${companion.user_id},
            ${room_id}
          )`)
        }

        const messages = await db.query(GET_MESSAGES_BY_ROOM(room_id))
    
        io.to(room_id).emit('math-message', messages)
      }
    })
  
    io.emit('connected', socket.id)
  })
}