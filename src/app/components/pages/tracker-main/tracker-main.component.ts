import { Component, OnInit } from '@angular/core';
import {ProductTracker} from '../../../models/ProductTracker';
import {AddTrackerDialogComponent} from './add-tracker-dialog/add-tracker-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {TrackerService} from '../../../services/tracker.service';
import {catchError, switchMap, take, takeUntil} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {UserService} from '../../../services/user.service';
import {FirebaseAuthService} from '../../../services/firebase-auth.service';
import {ActiveTrackerService} from '../../../services/active-tracker.service';

@Component({
  selector: 'app-tracker-main',
  templateUrl: './tracker-main.component.html',
  styleUrls: ['./tracker-main.component.scss']
})
export class TrackerMainComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public _trackerService: TrackerService,
              public _userService: UserService,
              public firebaseAuth: FirebaseAuthService) { }

  ngOnInit(): void {
    this._trackerService.getAllActiveTrackersByUserId(this._userService.currentUserData.id);
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
    this._trackerService.addTracker(url);
  }

  removeTracker(trackerId: string){
    this._trackerService.removeTracker(trackerId);
  }

}
