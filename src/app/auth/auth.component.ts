import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 input;

  constructor(private loginservice: LoginService,private rouuter:Router) { }

  


  ngOnInit(): void {
    this.input = {
      username: '',
      password: '',
    }
  }

  onLogin() {
    this.loginservice.login(this.input).subscribe((res: Response) => {
      localStorage.setItem('accessToken', res['access'])
      this.rouuter.navigate(['home/'])
      // console.log(res['access'])
    }, error => {
      console.log('error')
    })
  }
}