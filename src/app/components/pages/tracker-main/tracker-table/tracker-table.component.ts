import {Component, Input, OnInit} from '@angular/core';
import {faImage, faPlus } from '@fortawesome/free-solid-svg-icons';
import {ProductTracker} from '../../../../models/ProductTracker';
import {MatTableDataSource} from '@angular/material/table';
import {TrackerService} from '../../../../services/tracker.service';

@Component({
  selector: 'app-tracker-table',
  templateUrl: './tracker-table.component.html',
  styleUrls: ['./tracker-table.component.scss']
})
export class TrackerTableComponent implements OnInit {

  faPlus = faPlus;
  faImage = faImage;

  displayedColumns: string[] = ['image', 'title', 'site', 'statuses', 'prices', 'actions'];
  dataSource: MatTableDataSource<ProductTracker>;


  @Input() trackers: ProductTracker[];

  constructor(private _trackerService: TrackerService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ProductTracker>();
    this._trackerService.newTrackerDataSubject.subscribe(() => {
      this.dataSource.data = this._trackerService.ProductTrackers;
    })
  }

  changeActiveTracker(index: number){
    console.log("Change to tracker: ", index);
    this._trackerService.changeActiveTracker(index);
  }

}
