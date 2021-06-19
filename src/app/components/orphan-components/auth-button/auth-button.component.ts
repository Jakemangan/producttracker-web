import { Component, OnInit } from '@angular/core';
import {GoogleAuthService} from '../../../services/g-auth/google-auth.service';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {
  constructor(public gAuthService: GoogleAuthService) {}

  ngOnInit(): void {
  }
}
