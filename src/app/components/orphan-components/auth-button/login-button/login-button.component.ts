import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';
import {FirebaseAuthService} from '../../../../services/firebase-auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  constructor(private _router: Router,
              @Inject(DOCUMENT) private doc: Document,
              private _firebaseAuth: FirebaseAuthService
              ) {}

  ngOnInit(): void {
    console.log("Origin: " + this.doc.location.origin + this._router.url);
  }

  login(){
    this._router.navigateByUrl('/login')
  }
}
