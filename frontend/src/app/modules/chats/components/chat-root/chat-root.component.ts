import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { IChat } from '../../models/chat.interface';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-chat-root',
  templateUrl: './chat-root.component.html',
  styleUrls: ['./chat-root.component.scss'],
})
export class ChatRootComponent implements OnInit {
  chats: IChat[] = [];
  bookIcon = faBook;

  constructor(
    private chat: ChatService,
    private imageService: ImageService,
  ) { }

  ngOnInit(): void {
    this.chat.getChats().subscribe(
      (res) => {
        this.chats = res;
      } 
    )
  }

  getImage(imagePath: string): string {
    return this.imageService.getFullImagePath(imagePath, "announcements");
  }

  getRouterLink(chat: IChat): any[] {
    return ['room' + `${chat.name === 'Math_Bot' ? '-math/' + chat.room_id : '/' + chat.room_id}`]
  }

}
