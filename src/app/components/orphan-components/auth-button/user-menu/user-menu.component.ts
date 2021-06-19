import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {GoogleAuthService} from '../../../../services/g-auth/google-auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {

  menuOpen = false;
  isUserAdmin = false;
  avatarDisplayName = "";

  constructor(public gAuthService: GoogleAuthService,
              private _userService: UserService) { }

  ngOnInit(): void {
    if(this.gAuthService.isLoggedIn){
      this.isUserAdmin = this._userService.isUserAdmin();
      this.avatarDisplayName = this._userService.currentUserData.email.substr(0, 1).toUpperCase() + this._userService.currentUserData.email.substr(1, 1);
    }
  }

  logout(){
    this.gAuthService.signOut();
  }

  menuOpened(){
    this.menuOpen = true;
  }

  menuClosed(){
    this.menuOpen = false;
  }
}
