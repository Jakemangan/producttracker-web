import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../../services/firebase-auth.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

  constructor(
    public authService: FirebaseAuthService
  ) { }

  ngOnInit(): void {
  }

}
