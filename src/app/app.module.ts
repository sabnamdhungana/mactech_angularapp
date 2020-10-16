import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { MgrnavbarComponent } from './components/mgrnavbar/mgrnavbar.component';
import { MgrhomeComponent } from './components/mgrhome/mgrhome.component';
import { MgrloginComponent } from './components/mgrlogin/mgrlogin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ManagerComponent,
    MgrnavbarComponent,
    MgrhomeComponent,
    MgrloginComponent,
    SignupComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
