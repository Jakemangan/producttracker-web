import {Component, Input, OnInit} from '@angular/core';
import {ProductTracker} from '../../../../models/ProductTracker';

@Component({
  selector: 'app-active-tracker-display',
  templateUrl: './active-tracker-display.component.html',
  styleUrls: ['./active-tracker-display.component.scss']
})
export class ActiveTrackerDisplayComponent implements OnInit {

  @Input() tracker: ProductTracker;

  constructor() { }

  ngOnInit(): void {
  }

}
