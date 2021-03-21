import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {TrackerService} from '../../../services/tracker.service';
import {take} from 'rxjs/operators';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public outPrice: string = "";
  public form!: FormGroup;
  public loading: boolean = false;

  constructor(private _formBuilder: FormBuilder,
              private _priceService: TrackerService,
              private _auth: AuthService,
              private _router: Router) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      url: this._formBuilder.control("")
    })

    // this._auth.isAuthenticated$.subscribe(res => {
    //   this._router.navigateByUrl("/tracker")
    // })
  }


}
