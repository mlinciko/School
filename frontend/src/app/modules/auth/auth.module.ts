import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DevExtremeModule } from 'devextreme-angular';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthRootComponent } from './components/auth-root/auth-root.component';
import { DefaultComponent } from './components/default/default.component';
import { LoginComponent } from './components/login/login.component';
import { RegistryComponent } from './components/registry/registry.component';



@NgModule({
  declarations: [
    AuthRootComponent,
    DefaultComponent,
    LoginComponent,
    RegistryComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DevExtremeModule,
    FontAwesomeModule,
  ]
})
export class AuthModule { }
