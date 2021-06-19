import { Component, OnInit } from '@angular/core';
import {GoogleAuthService} from '../../../services/g-auth/google-auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  constructor(public gAuthService: GoogleAuthService) { }

  ngOnInit(): void {
  }

}
