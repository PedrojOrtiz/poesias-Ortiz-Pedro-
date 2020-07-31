import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private authSrv: AuthService) { }

  ngOnInit() {
  }

  registrar() {
    this.authSrv.onRegister(this.user);
  }

}
