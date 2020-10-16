import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ManagerComponent } from "./components/manager/manager.component";
import { MgrnavbarComponent } from "./components/mgrnavbar/mgrnavbar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import {MgrhomeComponent  } from "./components/mgrhome/mgrhome.component";
import {MgrloginComponent } from "./components/mgrlogin/mgrlogin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { MessageComponent } from "./components/message/message.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path:'manager', component: ManagerComponent},
  { path:'managerhome', component: MgrhomeComponent},
  { path:'managerlogin', component: MgrloginComponent},
  {path:'signup', component: SignupComponent},
  {path:'messageus', component: MessageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
