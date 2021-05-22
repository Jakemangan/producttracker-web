import {Component, Input, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-static-colour-settings-row',
  templateUrl: './static-colour-settings-row.component.html',
  styleUrls: ['./static-colour-settings-row.component.scss']
})
export class StaticColourSettingsRowComponent implements OnInit {

  @Input() icon: IconDefinition;
  @Input() textIcon: string;
  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

}
