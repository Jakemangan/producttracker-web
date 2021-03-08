import { Component, OnInit } from '@angular/core';
import {ProductTrackerDefinition} from '../../../models/ProductTrackerDefinition';
import {AddTrackerDialogComponent} from './add-tracker-dialog/add-tracker-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {TrackerService} from '../../../services/tracker.service';
import {catchError, switchMap, take} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

@Component({
  selector: 'app-tracker-main',
  templateUrl: './tracker-main.component.html',
  styleUrls: ['./tracker-main.component.scss']
})
export class TrackerMainComponent implements OnInit {

  userId: string = "179f6295-d13a-45d2-bd53-39a2a0937470";
  activeTrackers: ProductTrackerDefinition[] = [];

  constructor(public dialog: MatDialog,
              private _trackerService: TrackerService) { }

  ngOnInit(): void {
    this._trackerService.getAllActiveTrackersByUserId(this.userId).subscribe((res: ProductTrackerDefinition[]) => {
      if(res && res.length > 0){
        res.forEach(res => this.activeTrackers.push(res));
      }
    })
  }

  openAddTrackerDialog(): void {
    const dialogRef = this.dialog.open(AddTrackerDialogComponent, {
      width: "600px",
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.addTracker(res);
      }
    })
  }

  addTracker(url: string){
    let newTracker: ProductTrackerDefinition = {
      url: url,
      owner: this.userId,
      id: undefined,
      dateStartedTracking: undefined,
      imageUrl: undefined,
      initialInstock: undefined,
      initialPrice: undefined,
      prettyPrice: undefined,
      title: undefined,
      currencyType: undefined,
      trackingFrequency: undefined
    }

    this.activeTrackers.push(newTracker);

    let initialiseBody = {
      url: url,
      owner: this.userId
    }

    this._trackerService.initialiseTracker(initialiseBody).pipe(take(1)).subscribe((res: ProductTrackerDefinition) => {
      newTracker.id = res.id;
      newTracker.url = res.url;
      newTracker.title = res.title;
      newTracker.initialPrice = res.initialPrice;
      newTracker.trackingFrequency = res.trackingFrequency;
      newTracker.initialInstock = res.initialInstock;
      newTracker.imageUrl = res.imageUrl;
      newTracker.currencyType = res.currencyType;
      newTracker.dateStartedTracking = res.dateStartedTracking;
      newTracker.prettyPrice = res.prettyPrice

      /*
      * TODO :: Find a better way to init empty tracker and then update, probably something using IDs, but that means the front-end would need
      * TODO :: to generate the ID
       */
      let indexOf = this.activeTrackers.indexOf(<ProductTrackerDefinition> this.activeTrackers.find(tracker => tracker.url === url && tracker.owner === this.userId));
      this.activeTrackers[indexOf] = newTracker
    });
  }

  removeTracker(trackerId: string){
    let trackerInstance = this.activeTrackers.find(x => x.id === trackerId);
    if(trackerInstance){
      this._trackerService.deleteTrackerById(trackerId).pipe(switchMap(() => {
        return this._trackerService.getAllActiveTrackersByUserId(this.userId)
      })).subscribe((newTrackerList: ProductTrackerDefinition[]) => {
        if(newTrackerList){
          this.activeTrackers = newTrackerList;
        } else {
          this.activeTrackers = [];
        }

      }, (err) => {
        console.error("Unable to delete tracker");
      })
    }
  }

}
