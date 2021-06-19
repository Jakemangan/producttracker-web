import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {GoogleAuthService} from './g-auth/google-auth.service';
import {switchMap, take} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthResolver implements Resolve<boolean> {

  constructor(private _gAuthService: GoogleAuthService,
              private _router: Router,
              private _userService: UserService){
  }

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    if(this._userService.currentUserData){
      return of(true);
    }

    return this._gAuthService.user$.pipe(take(1), switchMap(async user => {
      if (user) {
        this._userService.setDisplayName(user.displayName);
        await this._userService.getCurrentUserData(user.email);
        return of(true);
      } else {
        this._router.navigateByUrl('login')
      }

      return of(true);
    }))
  }
}
