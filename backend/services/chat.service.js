import { db } from "../index.js";
import _ from 'lodash';
import {findGCDs, parseStringToArray, extractNumbersAfterColon, calculateFirstCathetus, Y, countPrimesUpToN, calculateExpression} from "./math.service.js"

export const getUserChats = async(req, res, next) => {
  const userId = req.user.user_id;

  if (!userId) {
    return res.status(400).json({ message: 'User id must be provided' })
  }

  try {
    const chats = [...await db.query(`SELECT Room.room_id, Room.name FROM Room_participants
    INNER JOIN Room ON Room.room_id=Room_participants.room_id
    WHERE Room_participants.user_id=${userId};`)]

    res
      .status(200)
      .json(chats)

  } catch (e) {
    console.log('*getUserChats service')
    next(e)
  }
}

export const createChat = async(req, res, next) => {
  const currUserId = req.user.user_id;
  const companionId = req.body.companion_id;
  const announcementId = req.body.announcement_id;

  if (!currUserId) {
    return res.status(400).json({ message: 'User id must be provided' })
  }
  if (!companionId) {
    return res.status(400).json({ message: 'Companion id must be provided' })
  }
  if (!announcementId) {
    return res.status(400).json({ message: 'Announcement id must be provided' })
  }
  try {
    const currUser = _.first(await db.query(`SELECT * FROM User WHERE user_id=${currUserId}`));
    if (!currUser) {
      return res.status(404).json({ message: 'User not found' })
    }
    const companion = _.first(await db.query(`SELECT * FROM User WHERE user_id=${companionId}`));
    if (!companion) {
      return res.status(404).json({ message: 'Companion not found' })
    }
    const announcement = _.first(await db.query(`SELECT * FROM Announcement WHERE announcement_id=${announcementId}`));
    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' })
    }

    const responseRoom = await db.query(`INSERT INTO Room(announcement_id) VALUES(${announcementId})`)
    await db.query(`INSERT INTO RoomParticipants(user_id, room_id) 
    VALUES (${currUserId}, ${responseRoom.insertId}), (${companionId}, ${responseRoom.insertId})`)

    res
      .status(200)
      .json({room_id: responseRoom.insertId})

  } catch (e) {
    console.log('*getUserChats service')
    next(e)
  }
}

export const botResponse = (message) => {
  const type = message.split(':')[0];
  switch(type) {
    case '1': {
      return findGCDs(parseStringToArray(message))
    }
    case '2': {
      const numbers = extractNumbersAfterColon(message);
      return calculateFirstCathetus(numbers[0], numbers[1])
    }
    case '3': {
      const numbers = extractNumbersAfterColon(message);
      return Y(numbers[0], numbers[1]);
    }
    case '4': {
      const num = message.split(':')[1];
      return countPrimesUpToN(num);
    }
    case '5': {
      const numbers = extractNumbersAfterColon(message);
      return calculateExpression(numbers[0], numbers[1])
    }
    default: 
      return "Ошибка. Убедитесь, что значения корректны!" 
  }
}
