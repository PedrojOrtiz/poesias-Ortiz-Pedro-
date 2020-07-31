import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserLogin } from 'src/app/model/userlogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public user: Observable<any>;
  public isLogged: any = false;

  constructor(private afAuth: AngularFireAuth, private angularFirestore: AngularFirestore, private alertController: AlertController, private router: Router) { 
    afAuth.authState.subscribe(user => (this.isLogged = user));
   }


   // Registrar
  async onRegister(user: User) {
    try{
      const pac = await this.afAuth.createUserWithEmailAndPassword(user.email, user.contrasena);
      user.uid = pac.user.uid;
      const param = JSON.parse(JSON.stringify(user));
      this.angularFirestore.collection('users').doc(pac.user.uid).set(param);
      return pac;
    } catch (error) {
      console.log('Error on register user', error);
      return error;
    }
  }

  // IniciarSesion
  async onLogin(user: UserLogin) {
    try{
      const us = await this.afAuth.signInWithEmailAndPassword(user.email, user.contrasena);
      this.router.navigateByUrl('listar-poesia');
    } catch (error) {
      this.presentAlert(error.message);
    }
  }

  // Mostrar alertas
  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error al iniciar sesión',
      subHeader: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  cerrarSesion() {
    try{
      this.afAuth.signOut();
      this.router.navigateByUrl('login');
    } catch (error) {
      console.log(error);
    }

  }



}
