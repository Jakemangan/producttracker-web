import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {TrackerService} from '../../../services/tracker.service';
import {take} from 'rxjs/operators';

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
              private _priceService: TrackerService) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      url: this._formBuilder.control("")
    })
  }


}
