import {Component, Input, OnInit} from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import {ProductTracker} from '../../../../models/ProductTracker';
import {TrackerService} from '../../../../services/tracker.service';

@Component({
  selector: 'app-active-tracker-display',
  templateUrl: './active-tracker-display.component.html',
  styleUrls: ['./active-tracker-display.component.scss']
})
export class ActiveTrackerDisplayComponent implements OnInit {

  faImage = faImage;

  public shouldDisplaySkeletonImage = false;

  @Input() tracker: ProductTracker;

  constructor(private _trackerService: TrackerService) { }

  ngOnInit(): void {
    this._trackerService.newActiveTrackerSubject.subscribe(() => {
      this.disableSkeletonImage();
    })
  }

  displaySkeletonImage(){
    this.shouldDisplaySkeletonImage = true;
  }

  disableSkeletonImage(){
    this.shouldDisplaySkeletonImage = false;
  }

}
