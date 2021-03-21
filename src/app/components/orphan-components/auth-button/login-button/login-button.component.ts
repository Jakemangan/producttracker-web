import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  constructor(private _router: Router,
              @Inject(DOCUMENT) private doc: Document,
              private _userService: UserService
              ) {}

  ngOnInit(): void {
    console.log("Origin: " + this.doc.location.origin + this._router.url);
  }

  login(){
    this._userService.loginWithRedirect(this._router.url)
  }
}
