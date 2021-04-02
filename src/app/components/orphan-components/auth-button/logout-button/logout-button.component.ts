import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {FirebaseAuthService} from '../../../../services/firebase-auth.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent implements OnInit {
  constructor(
    private _firebaseAuth: FirebaseAuthService
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this._firebaseAuth.logout();
  }
}
