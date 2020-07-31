import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/userlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: UserLogin = new UserLogin();

  constructor(private auuthSrv: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auuthSrv.onLogin(this.user);
  }

}
