import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {AuthService} from '@auth0/auth0-angular';
import {UserService} from './user.service';
import {map, switchMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthResolver implements Resolve<boolean> {
  constructor(private _auth: AuthService, private _userService: UserService){}

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //     return this._userService.getCurrentUserData().pipe(switchMap(userData => {
  //       this._userService.currentUserData = userData;
  //       console.log("Current user data set");
  //       // return of(true).pipe(take(1));
  //       return of(true);
  //     }))
  //   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._userService.getCurrentUserData().pipe(switchMap(userData => {
      this._userService.currentUserData = userData;
      console.log("Current user data set");
      // return of(true).pipe(take(1));
      return this._auth.user$.pipe(take(1))
    }), switchMap(auth0User => {
      this._userService.auth0UserData = auth0User;
      return of(true).pipe(take(1));
    }))
  }
}

// resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//   return forkJoin([
//     this._userService.getCurrentUserData(),
//     this._auth.user$
//   ]).pipe(map(responses => {
//     return {
//       apiUserData: responses[0],
//       auth0UserData: responses[1]
//     }
//   }), switchMap(out => {
//     this._userService.currentUserData = out.apiUserData;
//     this._userService.auth0UserData = out.auth0UserData;
//     console.log("Current user data set");
//     return of(true).pipe(take(1));
//   }))
// }
