import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable()
export class SocketService {

  constructor(
    private socket: Socket,
  ) { }

  sendMessage(message: string, userId: number, roomId: number) {
    this.socket.emit('message', { message, user_id: userId, room_id: roomId} );
  }

  sendMathMessage(message: string, userId: number, roomId: number) {
    this.socket.emit('math-message', { message, user_id: userId, room_id: roomId} );
  }

  getMessages = () => {
    return Observable.create((observer: any) => {
      this.socket.on('message', (messages: any) => {
        observer.next(messages);
      })
    })
  }

  getMathMessages = () => {
    return Observable.create((observer: any) => {
      this.socket.on('math-message', (messages: any) => {
        observer.next(messages);
      })
    })
  }

  joinRoom = (userId: number, roomId: number) => {
    this.socket.emit('join-room', {user_id: userId, room_id: roomId});
  }

  joinMathRoom = (userId: number, roomId: number) => {
    this.socket.emit('join-math-room', {user_id: userId, room_id: roomId});
  }

  joinedRoom = () => {
    return Observable.create((observer: any) => {
      this.socket.on('join-room', (res: any) => {
        observer.next(res);
      })
    })
  }

  joinedMathRoom = () => {
    return Observable.create((observer: any) => {
      this.socket.on('join-math-room', (res: any) => {
        observer.next(res);
      })
    })
  }

  connected = () => {
    return Observable.create((observer: any) => {
      this.socket.on('connected', (id: string) => {
        observer.next(id);
      })
    })
  }

  connection = () => {
    this.socket.connect();
  }

  disconnection = () => {
    this.socket.disconnect();
  }
}
