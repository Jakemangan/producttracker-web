import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {PriceResponse} from '../models/ScrapeResult';
import {ProductTracker} from '../models/ProductTracker';
import {catchError, switchMap, take} from 'rxjs/operators';
import {UserService} from './user.service';
import {ProductTrackerConfig} from '../models/ProductTrackerConfig';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  baseUrl = "";
  private trackers: ProductTracker[] = [];
  private activeTracker: ProductTracker;

  newTrackerDataSubject: Subject<null> = new Subject<null>();
  newActiveTrackerSubject: Subject<null> = new Subject<null>();

  constructor(private _http: HttpClient,
              public _userService: UserService,
              private _toastr: ToastrService) {
    this.baseUrl = environment.apiBaseUrl;
  }

  get ProductTrackers(): ProductTracker[] {
    return this.trackers;
  }

  get ActiveTracker(): ProductTracker {
    return this.activeTracker;
  }

  addTracker(url: string){
    let newTracker: ProductTracker = {
      url: url,
      owner: this._userService.currentUserData.id,
      id: "tbd"
    }

    this.trackers.push(newTracker);

    let initialiseBody = {
      url: url,
      owner: this._userService.currentUserData.id
    }

    this.initialiseTracker(initialiseBody).pipe(take(1)).subscribe((res: ProductTracker) => {
      newTracker = res;

      /*
      * TODO :: Find a better way to init empty tracker and then update, probably something using IDs, but that means the front-end would need
      * TODO :: to generate the ID
       */
      let indexOf = this.trackers.indexOf(<ProductTracker> this.trackers.find(tracker => tracker.id == "tbd"));
      this.trackers[indexOf] = newTracker
    }, error => {
      console.log("Error initialising tracker");
      this.trackers = this.trackers.filter(x => x.id !== "tbd");
      this._toastr.error("We were unable to add a tracker for that URL.", "", {
        disableTimeOut: false,
        progressBar: true,
        positionClass: "toast-bottom-center"
      })
    });

  }

  removeTracker(trackerId: string){
    let trackerInstance = this.trackers.find(x => x.id === trackerId);
    if(trackerInstance){
      this.deleteTrackerById(trackerId).pipe().subscribe(() => {
        this.getAllTrackersByUserId(this._userService.currentUserData.id)
      }, (err) => {
        console.error("Unable to delete tracker");
      })
    }
  }

  updateTracker(idToUpdate: string, config: ProductTrackerConfig){
    let url = this.baseUrl + "/tracker/config";
    let body = {
      id: idToUpdate,
      config: config
    }
    return this._http.put<ProductTracker>(url, body).pipe(take(1));
  }

  changeActiveTracker(index: number){
    this.activeTracker = this.trackers[index];
    this.newActiveTrackerSubject.next();
  }

  /*
  * API Calls
   */
  getAllTrackersByUserId(userId: string): void {
    let url = this.baseUrl + "/tracker/" + userId;
    this._http.get<ProductTracker[]>(url).pipe(take(1)).subscribe((res: ProductTracker[]) => {
      if(res && res.length > 0){
        this.trackers = res;
        this.activeTracker = res[0];
        this.newTrackerDataSubject.next();
      }
    });
  }

  //TODO :: Type here
  initialiseTracker(initialiseBody: any): Observable<ProductTracker> {
    let url = this.baseUrl + "/tracker/add";
    return this._http.post<ProductTracker>(url, initialiseBody);
  }

  deleteTrackerById(trackerId: string): Observable<void> {
    let url = this.baseUrl + "/tracker/" + trackerId;
    return this._http.delete<void>(url);
  }

  checkHostnameIsConfirmedWorking(urlToCheck: string): Observable<boolean> {
    let url = this.baseUrl + "/tracker/hostname/confirmed";
    let body = {
      "url": urlToCheck
    };
    return this._http.post<boolean>(url, body);
  }

}
