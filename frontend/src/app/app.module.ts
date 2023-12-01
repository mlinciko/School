import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppGuard } from './app.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MaterialModule } from './modules/material/material.module';
import { FooterComponent } from './modules/main/components/footer/footer.component';
import { HeaderComponent } from './modules/main/components/header/header.component';
import { MainRootComponent } from './modules/main/components/main-root/main-root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevExtremeModule } from 'devextreme-angular';
import { CookieService } from 'ngx-cookie-service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { GradesComponent } from './modules/main/components/grades/grades.component';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MainRootComponent,
    HeaderComponent,
    FooterComponent,
    GradesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    MaterialModule,
    DevExtremeModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    AppGuard,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
