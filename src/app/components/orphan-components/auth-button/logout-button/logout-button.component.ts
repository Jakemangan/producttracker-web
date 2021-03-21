import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {DOCUMENT} from '@angular/common';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent implements OnInit {
  constructor(
    private _userService: UserService
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this._userService.logout();
  }
}
