import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {FirebaseAuthService} from '../../../../services/firebase-auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {

  menuOpen = false;
  isUserAdmin = false;

  constructor(public _firebaseAuth: FirebaseAuthService) { }

  ngOnInit(): void {
    // this.isUserAdmin = this._userService.isUserAdmin();
  }

  logout(){
    this._firebaseAuth.logout();
  }

  menuOpened(){
    this.menuOpen = true;
  }

  menuClosed(){
    this.menuOpen = false;
  }
}
