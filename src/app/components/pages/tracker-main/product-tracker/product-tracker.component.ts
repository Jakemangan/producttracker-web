import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {TrackerService} from '../../../../services/tracker.service';
import {take} from 'rxjs/operators';
import {ProductTrackerDefinition} from '../../../../models/ProductTrackerDefinition';
import {PriceResponse} from '../../../../models/ScrapeResult';


@Component({
  selector: 'app-product-tracker',
  templateUrl: './product-tracker.component.html',
  styleUrls: ['./product-tracker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductTrackerComponent implements OnInit, OnChanges {

  @Input() trackerDefinition!: ProductTrackerDefinition;
  @Input() isLoading = true;
  @Output() removeEmitter: EventEmitter<string> = new EventEmitter<string>();

  public prettyPrice!: string;
  public loading: boolean = false;

  constructor(private _priceService: TrackerService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  remove(){
    this.removeEmitter.emit(this.trackerDefinition.id);
  }


}
