import { Component } from '@angular/core';
import { ChatRoomComponent } from '../chat-room/chat-room.component';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { SocketService } from 'src/app/services/socket.service';
import { UserService } from 'src/app/services/user.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-chat-room-math',
  templateUrl: '../chat-room/chat-room.component.html',
  styleUrls: ['../chat-room/chat-room.component.scss'],
  providers: [SocketService]
})
export class ChatRoomMathComponent extends ChatRoomComponent {

  constructor(
    protected override socketService: SocketService,
    protected override route: ActivatedRoute,
    protected override userService: UserService,
    protected override imageService: ImageService,
  ) { 
    super(socketService, route, userService, imageService)
    const id = this.route.snapshot.paramMap?.get("id")
    this.roomId = id ? +id : null;

    this.userId = this.userService.getUserId();

    this.connect();
  }

  override joinRoom(): void {
    if (this.userId && this.roomId) {
      this.socketService.joinMathRoom(this.userId, this.roomId)
    }
  }

  override joinedRoom(): void {
    this.socketService.joinedMathRoom()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      ({companion, messages}: any) => {
        this.chat = {
          companion
        }
        this.messages = messages;
      }
    )
  }

  override sendMessage(message: string): void {
    if (this.userId && this.roomId) {
      this.socketService.sendMathMessage(message, this.userId, this.roomId)
      this.newMessage = "";
    }
  }

  override getMessages(): void {
    this.socketService.getMathMessages()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (res: any) => {
        this.messages = res;
        setTimeout(()=> this.scrollToBottom(),1)
      }
    )
  }
}
