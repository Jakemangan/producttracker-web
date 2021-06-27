import {Component, Input, OnInit} from '@angular/core';
import {ProductTracker} from '../../../../models/ProductTracker';

@Component({
  selector: 'app-product-tracker-v2',
  templateUrl: './product-tracker-v2.component.html',
  styleUrls: ['./product-tracker-v2.component.scss']
})
export class ProductTrackerV2Component implements OnInit {

  @Input() productTracker: ProductTracker;

  constructor() { }

  ngOnInit(): void {
  }

}
