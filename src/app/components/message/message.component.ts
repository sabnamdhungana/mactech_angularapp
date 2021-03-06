import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  loginForm : FormGroup;

  constructor() {
  
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      inputEmail: new FormControl(''),
      inputPassword: new FormControl('')
    });

    }

    loginUser = (login) => {  
    console.log(login);
    if(login.inputEmail=="user@user.com"&&login.inputPassword=="user"){
      window.location.replace("http://localhost:4200/home");
    }
  

}
}


