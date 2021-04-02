import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../../services/firebase-auth.service';

@Component({
  selector: 'app-auth-verify-email',
  templateUrl: './auth-verify-email.component.html',
  styleUrls: ['./auth-verify-email.component.scss']
})
export class AuthVerifyEmailComponent implements OnInit {

  constructor(
    public authService: FirebaseAuthService
  ) { }

  ngOnInit(): void {
  }

}
