import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private afDb: AngularFireDatabase) { 
    this.user$ = this.afAuth.authState;
   }

  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
