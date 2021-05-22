import {Component, Input, OnInit} from '@angular/core';
import {ProductTracker} from '../../../../models/ProductTracker';

@Component({
  selector: 'app-tracker-table',
  templateUrl: './tracker-table.component.html',
  styleUrls: ['./tracker-table.component.scss']
})
export class TrackerTableComponent implements OnInit {

  @Input() trackers: ProductTracker[];

  constructor() { }

  ngOnInit(): void {
  }

}
