import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(router: Router, private _userService: UserService) {
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
