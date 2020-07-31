import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../../model/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  getUsuarios(): Observable<any[]> {
    return this.afs.collection('users').valueChanges();
  }

  getUsuario(uid: string): Observable<any> {
      const itemDoc = this.afs.doc<any>(`users/${uid}`);
      return itemDoc.valueChanges();
  }
}