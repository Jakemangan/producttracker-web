import { Injectable, NgZone } from '@angular/core';
import  auth  from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import firebase from 'firebase/app';
import User = firebase.User;
import {UserService} from './user.service';

export interface LocalUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  firebaseUserData: User;
  isLoggedIn: boolean = false;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private _userService: UserService
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.checkAuthState();
  }

  checkAuthState(){
    this.afAuth.authState.subscribe(async user => {
      if (user) {
        this.firebaseUserData = user;
        localStorage.setItem('user', JSON.stringify(this.firebaseUserData));
        // JSON.parse(localStorage.getItem('user'));
        await this._userService.getCurrentUserData(this.firebaseUserData.email);
        console.log("Current user data: ", this._userService.currentUserData);
        this.SetIsLoggedIn();
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result.user));
        // this.ngZone.run(() => {
        //
        // });
        
        this.GetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        const user = firebase.auth().currentUser;
        await user.updateProfile({displayName: "Jake"});
        this.SendVerificationMail();
        // result.user. = "Jake"
        localStorage.setItem('user', JSON.stringify(this.GetUserData(result.user)));
      }).catch((error) => {
        window.alert(error.message)
      })
  }

// {
//   /* Call the SendVerificaitonMail() function when new user sign
//   up and returns promise */
//   this.SendVerificationMail();
//   const user = firebase.auth().currentUser;
//   user.updateProfile({
//                        displayName: "Jake"
//                      });
//   localStorage.setItem('user', JSON.stringify(this.GetUserData(result.user)));
// }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
      .then(() => {
        this.router.navigateByUrl('/verify-email-address');
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  // Returns true when user is looged in and email is verified
  SetIsLoggedIn(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.isLoggedIn = (user !== null && user.emailVerified !== false);
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/app');
        })
        this.GetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  GetUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: LocalUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out
  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    })
  }
}
