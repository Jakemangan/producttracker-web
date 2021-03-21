import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {NavigationStart, Router} from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService, router: Router, private _userService: UserService) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        console.log(event);
      }
    });
  }

  ngOnInit(): void {
    // this.auth.isAuthenticated$.subscribe(res => {
    //   if(res){
    //     console.log("Logged in - getting user data");
    //     this._userService.getCurrentUserData();
    //   } else{
    //     console.log("Not logged in");
    //   }
    //
    // })
  }
}
