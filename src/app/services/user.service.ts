import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {switchMap, take, takeUntil, takeWhile} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../models/UserData';
import {environment} from '../../environments/environment';
import {FirebaseAuthService} from './firebase-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUserData: UserData = undefined!;
  public auth0UserData: any = undefined;

  constructor(private http: HttpClient) {
    // this.auth.isAuthenticated$.subscribe(res => {
    //   if(res){
    //     console.log(res);
    //
    //   }
    // })
  }

  getCurrentUserData(email: string): Promise<void>{
    return this.getUserData(email).toPromise().then(user => {
      this.currentUserData = user;
      console.log("User data retrieved");
    })
  }

  // getCurrentUserData(): Observable<UserData>{
  //   if(this.currentUserData){
  //     return of(this.currentUserData);
  //   } else {
  //     return this.auth.user$.pipe(take(1), switchMap(user => {
  //       if(user){
  //         return this.getUserData(user.email);
  //       } else {
  //         return EMPTY;
  //       }
  //     }))
  //   }
  // }

  isUserAdmin(): boolean {
    if(this.currentUserData){
      return this.currentUserData.userRole === 0;
    } else {
      return false;
    }
  }



  getUserData(email: string): Observable<UserData>{
    return this.http.get<UserData>(environment.apiBaseUrl + "/user/whoami/" + email)
  }
}
