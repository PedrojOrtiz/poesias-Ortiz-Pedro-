import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Poesia } from 'src/app/model/poesia';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-crear-poesia',
  templateUrl: './crear-poesia.page.html',
  styleUrls: ['./crear-poesia.page.scss'],
})
export class CrearPoesiaPage implements OnInit {

  poesia: Poesia = new Poesia();
  user: Observable<any[]>;
  
  constructor(private authSrv: AuthService, private firebaseSrv: FirebaseService, public router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {

    this.user = this.firebaseSrv.getUsuario(this.authSrv.isLogged.uid)
    this.user.subscribe(user => console.log(user));
    

    
  }



}
