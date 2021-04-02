import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../../services/firebase-auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  constructor(public authService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

}
