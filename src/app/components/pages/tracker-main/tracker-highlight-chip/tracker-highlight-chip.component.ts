import {Component, Input, OnInit} from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {ProductTracker} from '../../../../models/ProductTracker';
import {TrackerService} from '../../../../services/tracker.service';

@Component({
  selector: 'app-tracker-highlight-chip',
  templateUrl: './tracker-highlight-chip.component.html',
  styleUrls: ['./tracker-highlight-chip.component.scss']
})
export class TrackerHighlightChipComponent implements OnInit {

  @Input() productTracker: ProductTracker;

  public faCog = faCog;

  constructor(private _trackerService: TrackerService) { }

  ngOnInit(): void {
  }

  changeActiveTracker(){
    console.log("Change to tracker: ", this.productTracker.title);
    this._trackerService.changeActiveTracker(this.productTracker.id);
  }
}
