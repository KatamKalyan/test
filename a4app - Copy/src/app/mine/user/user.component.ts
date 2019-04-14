import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {RouterModule, Routes, Router} from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name ;
  pass;
  background = environment.backgroundcolor;
  constructor(public mysnack: MatSnackBar, public myrouter: Router) { }

  ngOnInit() {
  }
  submitted() {
  	if (this.name == 'admin' && this.pass == 'admin123') {
   // console.log(this.name,this.pass);
     this.myrouter.navigate(['/mylogin']);
    } else {
// alert("username or password invalid");
  		this.mysnack.open('username or password is invalid!', 'retry', {duration: 3000});
  		this.name = '';
  		this.pass = '';
  	}

  }

}
