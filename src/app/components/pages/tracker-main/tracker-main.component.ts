import { Component, OnInit } from '@angular/core';
import {ProductTracker} from '../../../models/ProductTracker';
import {AddTrackerDialogComponent} from './add-tracker-dialog/add-tracker-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {TrackerService} from '../../../services/tracker.service';
import {catchError, switchMap, take} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {AuthService} from '@auth0/auth0-angular';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-tracker-main',
  templateUrl: './tracker-main.component.html',
  styleUrls: ['./tracker-main.component.scss']
})
export class TrackerMainComponent implements OnInit {

  activeTrackers: ProductTracker[] = [];

  constructor(public dialog: MatDialog,
              private _trackerService: TrackerService,
              private _auth: AuthService,
              public _userService: UserService) { }

  ngOnInit(): void {

    // this._auth.isAuthenticated$.subscribe(res => {
    //   if(res){
    //     console.log("Logged in - getting trackers")
    console.log("Auth0: ", this._userService.auth0UserData);
        this._trackerService.getAllActiveTrackersByUserId(this._userService.currentUserData.id).subscribe((res: ProductTracker[]) => {
          if(res && res.length > 0){
            res.forEach(res => this.activeTrackers.push(res));
          }
        })
      // } else {
      //   console.log("Not logged in - redirecting")
      //   this._userService.loginWithRedirect("/tracker")
      // }
    // })
  }

  test(){
    console.log("Test");
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
    let newTracker: ProductTracker = {
      url: url,
      owner: this._userService.currentUserData.id,
      id: undefined,
      dateStartedTracking: undefined,
      imageUrl: undefined,
      isAvailable: undefined,
      priceData: undefined,
      title: undefined,
      currencyType: undefined,
      trackingFrequency: undefined,
      datapoints: undefined
    }

    this.activeTrackers.push(newTracker);

    let initialiseBody = {
      url: url,
      owner: this._userService.currentUserData.id
    }

    this._trackerService.initialiseTracker(initialiseBody).pipe(take(1)).subscribe((res: ProductTracker) => {
      newTracker = res;
      // newTracker.id = res.id;
      // newTracker.url = res.url;
      // newTracker.title = res.title;
      // newTracker.initialPrice = res.initialPrice;
      // newTracker.initialPricePretty = res.initialPricePretty;
      // newTracker.currentPrice = res.currentPrice;
      // newTracker.currentPricePretty = res.currentPricePretty;
      // newTracker.trackingFrequency = res.trackingFrequency;
      // newTracker.isAvailable = res.isAvailable;
      // newTracker.imageUrl = res.imageUrl;
      // newTracker.currencyType = res.currencyType;
      // newTracker.dateStartedTracking = res.dateStartedTracking;

      /*
      * TODO :: Find a better way to init empty tracker and then update, probably something using IDs, but that means the front-end would need
      * TODO :: to generate the ID
       */
      let indexOf = this.activeTrackers.indexOf(<ProductTracker> this.activeTrackers.find(tracker => tracker.url === url && tracker.owner === this._userService.currentUserData.id));
      this.activeTrackers[indexOf] = newTracker
    });
  }

  removeTracker(trackerId: string){
    let trackerInstance = this.activeTrackers.find(x => x.id === trackerId);
    if(trackerInstance){
      this._trackerService.deleteTrackerById(trackerId).pipe(switchMap(() => {
        return this._trackerService.getAllActiveTrackersByUserId(this._userService.currentUserData.id)
      })).subscribe((newTrackerList: ProductTracker[]) => {
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
