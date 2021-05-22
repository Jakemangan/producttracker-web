import {Component, Input, OnInit} from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings-row',
  templateUrl: './settings-row.component.html',
  styleUrls: ['./settings-row.component.scss']
})
export class SettingsRowComponent implements OnInit {

  @Input() icon: IconDefinition;
  @Input() textIcon: string;
  @Input() label: string;
  @Input() value: string;
  @Input() positiveColour: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
