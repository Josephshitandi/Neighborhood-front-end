import { Component, OnInit } from '@angular/core';
import {HoodService } from '../services/hood.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup;

  constructor(private UserService:HoodService) { }

  ngOnInit(){
    this.signup = {
      email:"",
      username:"",
      is_staff: false,
      password:""
    }
  }

  signupUser(){
    this.UserService.AddUser(this.signup).subscribe(
      response => {
        alert('user' + this.signup.username + ' has been created')
      },
      error => console.log('error', error)
    )
  }
}