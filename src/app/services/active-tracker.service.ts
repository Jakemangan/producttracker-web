import { Injectable } from '@angular/core';
import {ProductTracker} from '../models/ProductTracker';
import {switchMap, take} from 'rxjs/operators';
import {UserService} from './user.service';
import {TrackerService} from './tracker.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveTrackerService {

  private activeTrackers: ProductTracker[] = [];
  public activeTrackerBehaviourSubject: BehaviorSubject<ProductTracker[]> = new BehaviorSubject<ProductTracker[]>(null);

  constructor(private _userService: UserService,
              private _trackerService: TrackerService) { }

  get ActiveTrackers(): ProductTracker[] {
    return this.activeTrackers;
  }


}
