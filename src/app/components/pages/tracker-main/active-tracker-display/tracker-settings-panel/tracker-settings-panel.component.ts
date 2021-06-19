import { Component, OnInit } from '@angular/core';
import {faCalendar, faClock, faEnvelope, faExternalLinkAlt, faHourglassStart, faPercentage, faShoppingBag, faShoppingBasket, faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tracker-settings-panel',
  templateUrl: './tracker-settings-panel.component.html',
  styleUrls: ['./tracker-settings-panel.component.scss']
})
export class TrackerSettingsPanelComponent implements OnInit {

  faClock = faClock;
  faShoppingBasket = faShoppingBasket;
  faEnvelope = faEnvelope;
  faPercentage = faPercentage;
  faCalendar = faCalendar;

  constructor() { }

  ngOnInit(): void {
  }

}
