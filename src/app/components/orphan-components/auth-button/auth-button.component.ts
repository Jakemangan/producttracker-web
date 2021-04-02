import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../../services/firebase-auth.service';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {
  constructor(public firebaseAuth: FirebaseAuthService) {}

  ngOnInit(): void {}
}
