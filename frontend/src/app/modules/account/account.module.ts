import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRootComponent } from './components/account-root/account-root.component';
import { AccountRootMenuComponent } from './components/account-root-menu/account-root-menu.component';
import { AccountRoutingModule } from './account-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileManagementComponent } from './components/profile-management/profile-management.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MaterialModule } from '../material/material.module';
import { DevExtremeModule } from '../dev-extreme/dev-extreme.module';
import { UploadAvatarDialogComponent } from './components/upload-avatar-dialog/upload-avatar-dialog.component';



@NgModule({
  declarations: [
    AccountRootComponent,
    AccountRootMenuComponent,
    ProfileManagementComponent,
    ChangePasswordComponent,
    UploadAvatarDialogComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FontAwesomeModule,
    DevExtremeModule,
    MaterialModule,
  ]
})
export class AccountModule { }
