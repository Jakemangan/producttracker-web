import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PriceResponse} from '../models/ScrapeResult';
import {ProductTrackerDefinition} from '../models/ProductTrackerDefinition';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  baseUrl = "";

  constructor(private _http: HttpClient) {
    this.baseUrl = environment.apiBaseUrl;
  }

  getAllActiveTrackersByUserId(userId: string): Observable<ProductTrackerDefinition[]>{
    let url = this.baseUrl + "/tracker/" + userId;
    return this._http.get<ProductTrackerDefinition[]>(url);
  }

  //TODO :: Type here
  initialiseTracker(initialiseBody: any): Observable<ProductTrackerDefinition> {
    let url = this.baseUrl + "/tracker/add";
    return this._http.post<ProductTrackerDefinition>(url, initialiseBody);
  }

  deleteTrackerById(trackerId: string): Observable<void> {
    let url = this.baseUrl + "/tracker/" + trackerId;
    return this._http.delete<void>(url);
  }

}
