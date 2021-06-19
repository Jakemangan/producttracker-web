import {Inject, Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../models/UserData';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currentUserData: UserData = undefined!;
  public displayName: string = "";
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
      console.log("User data retrieved:", user);
    })
  }

  setDisplayName(name: string){
    this.displayName = name;
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
