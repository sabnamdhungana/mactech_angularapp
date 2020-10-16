import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-mgrlogin',
  templateUrl: './mgrlogin.component.html',
  styleUrls: ['./mgrlogin.component.css']
})
export class MgrloginComponent implements OnInit {

  managerloginForm : FormGroup;

  constructor() { }

 
  ngOnInit(): void {
    this.managerloginForm = new FormGroup({
      inputEmail: new FormControl(''),
      inputPassword: new FormControl('')
    });

    }

    loginManager = (login) => {  
    console.log(login);
    if(login.inputEmail=="admin@admin.com"&&login.inputPassword=="admin"){
      window.location.replace("http://localhost:4200/managerhome");
    }
  

}
}