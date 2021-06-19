import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/User';
import {Observable, of} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {switchMap, tap} from 'rxjs/operators';
import firebase from 'firebase';
import auth = firebase.auth;
import {UserService} from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  isLoggedIn: boolean = false;
  user$: Observable<User>;

  constructor(private _router: Router,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private _userService: UserService)
  {
    this.user$ = this.afAuth.authState.pipe(switchMap( user => {
      if(user) {
        this.isLoggedIn = true;
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        this.isLoggedIn = false;
        return of(null);
      }
    }))
  }

  async googleSignIn(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await auth().signInWithPopup(provider);
    this.updateUserData(credential.user).then(() => {
      this._userService.getCurrentUserData(credential.user.email).then(() => {
        this.isLoggedIn = true;
        this._router.navigateByUrl('app')
      });
    });
  }

  async signOut(){
    await auth().signOut();
    this.isLoggedIn = false;
    return this._router.navigateByUrl('login');
  }

  private updateUserData(user: firebase.User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, {merge: true});
  }

  get IsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
