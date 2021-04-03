import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {FirebaseAuthService} from './firebase-auth.service';
import {switchMap, take} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthResolver implements Resolve<boolean> {
  constructor(private _firebaseAuth: FirebaseAuthService, private _afAuth: AngularFireAuth, private _userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this._afAuth.authState.pipe(take(1), switchMap(user => {
      if(user){
        this._firebaseAuth.firebaseUserData = user;
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', null);
      }
      return this._userService.getCurrentUserData(user.email)
    }), switchMap(() => {
      return of(true).pipe(take(1));
    }))

  }
}
