import { Component, OnInit } from '@angular/core';
import {faCalendar, faClock, faEnvelope, faExternalLinkAlt, faHourglassStart, faPercentage, faShoppingBag, faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tracker-settings-panel',
  templateUrl: './tracker-settings-panel.component.html',
  styleUrls: ['./tracker-settings-panel.component.scss']
})
export class TrackerSettingsPanelComponent implements OnInit {

  faClock = faClock;
  faShoppingBag = faShoppingBag;
  faEnvelope = faEnvelope;
  faPercentage = faPercentage;
  faCalendar = faCalendar;

  constructor() { }

  ngOnInit(): void {
  }

}
