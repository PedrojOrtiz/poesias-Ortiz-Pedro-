import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-poesia',
  templateUrl: './listar-poesia.page.html',
  styleUrls: ['./listar-poesia.page.scss'],
})
export class ListarPoesiaPage implements OnInit {

  users: Observable<any>;

  constructor(private authSrv: AuthService, private firebaseSrv: FirebaseService, public router: Router) { }

  ngOnInit() {
    this.users = this.firebaseSrv.getUsuarios();
    this.users.subscribe(res => console.log(res));
  }

  logout() {
    this.authSrv.cerrarSesion();
  }

  trackByFn(index, obj) {
    return obj.uid;
  }

  crearPoesia() {
    this.router.navigate(['crear-poesia'])
  }

}
