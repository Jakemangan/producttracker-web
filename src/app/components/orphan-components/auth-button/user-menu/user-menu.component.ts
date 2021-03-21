import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {

  menuOpen = false;

  constructor(public _userService: UserService) { }

  ngOnInit(): void {
  }

  logout(){
    this._userService.logout();
  }

  menuOpened(){
    this.menuOpen = true;
  }

  menuClosed(){
    this.menuOpen = false;
  }
}
