import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRootComponent } from './components/chat-root/chat-root.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { ChatRoomMathComponent } from './components/chat-room-math/chat-room-math.component';

const routes: Routes = [
  {
    path: "",
    component: ChatRootComponent,
  },
  {
    path: "room-math/:id",
    component: ChatRoomMathComponent
  },
  {
    path: "room/:id",
    component: ChatRoomComponent
  },
  { path: "", pathMatch: "full", redirectTo: ""},
  { path: "**", redirectTo: "" },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }
