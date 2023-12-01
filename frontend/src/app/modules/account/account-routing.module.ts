import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRootComponent } from './components/account-root/account-root.component';
import { ProfileManagementComponent } from './components/profile-management/profile-management.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
  {
    path: "",
    component: AccountRootComponent,
    children: [
      {
        path: "profile",
        component: ProfileManagementComponent,
      },
      {
        path: "change-password",
        component: ChangePasswordComponent,
      },
      {
        path: "chats",
        loadChildren: () =>
          import("../chats/chats.module").then(
            (m) => m.ChatsModule
          ),
      }
    ]
  },
  { path: "", pathMatch: "full", redirectTo: "user-announcements"},
  { path: "**", redirectTo: "all" },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
