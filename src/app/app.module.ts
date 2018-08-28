import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { MenuComponent } from './menu/menu.component';
import { ChannelsComponent } from './channels/channels.component';

import { HttpModule } from '@angular/http';
// for http
import { SocketService } from './socket.service';
// for created service

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    ChannelsComponent,
    MenuComponent,
    ChannelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
