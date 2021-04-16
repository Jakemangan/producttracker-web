import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../../services/firebase-auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public authService: FirebaseAuthService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      email: this._fb.control(""),
      password: this._fb.control(""),
      fullName: this._fb.control("")
    })
  }

  test(){
    console.log(this.form);
  }
}
