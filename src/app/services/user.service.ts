import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {AuthService} from '@auth0/auth0-angular';
import {switchMap, take, takeUntil, takeWhile} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../models/UserData';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUserData: UserData = undefined!;
  public auth0UserData: any = undefined;

  constructor(private auth: AuthService,
              private http: HttpClient) {
    // this.auth.isAuthenticated$.subscribe(res => {
    //   if(res){
    //     console.log(res);
    //
    //   }
    // })
  }

  // getCurrentUserData(){
  //   return this.auth.user$.pipe(take(1)).subscribe(res => {
  //     this.getUserData(res.email).toPromise().then(user => {
  //       this.currentUserData = user;
  //       console.log("User data retrieved");
  //     })
  //   })
  // }

  getCurrentUserData(): Observable<UserData>{
    return this.auth.user$.pipe(take(1), switchMap(user => {
      if(user){
        return this.getUserData(user.email);
      } else {
        return EMPTY;
      }
    }))
  }

  loginWithRedirect(redirect: string): void {
    this.auth.loginWithRedirect({
      appState: {target: redirect},

    }).subscribe(res => {
      console.log("Logged", res);
    });



    // this.auth.isAuthenticated$.pipe(takeUntil(this.auth.isAuthenticated$), switchMap(isAuth => {
    //   if(isAuth){
    //     return this.auth.user$
    //   }
    //   return EMPTY;
    // }), switchMap(auth0User => {
    //   console.log("Auth0user: ", auth0User)
    //   return this.getUserData(auth0User.email);
    // })).subscribe(userData => {
    //   console.log("Api user data: ", userData);
    // })

  }

  logout(){
    this.auth.logout({ returnTo: "http://localhost:4200" });
    this.currentUserData = undefined!;
  }

  getUserData(email: string): Observable<UserData>{
    console.log("in");
    return this.http.get<UserData>(environment.apiBaseUrl + "/user/whoami/" + email)
  }
}
