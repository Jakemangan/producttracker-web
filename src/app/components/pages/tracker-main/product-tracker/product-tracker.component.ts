import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {TrackerService} from '../../../../services/tracker.service';
import {take} from 'rxjs/operators';
import {ProductTracker} from '../../../../models/ProductTracker';
import {PriceResponse} from '../../../../models/ScrapeResult'
import { faEllipsisH, faChartArea, faShoppingBag, faExternalLinkAlt, faImage, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-tracker',
  templateUrl: './product-tracker.component.html',
  styleUrls: ['./product-tracker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductTrackerComponent implements OnInit, OnChanges {

  @Input() trackerDefinition!: ProductTracker;
  @Input() isLoading = true;
  @Output() removeEmitter: EventEmitter<string> = new EventEmitter<string>();

  public faEllipsisH = faEllipsisH;
  public faChartArea = faChartArea;
  public faShoppingBag = faShoppingBag;
  public faExternalLinkAlt = faExternalLinkAlt;
  public faImage = faImage;
  public faTimes = faTimes;

  public prettyPrice!: string;
  public loading: boolean = false;
  public shouldDisplaySkeletonImage = false;
  public priceDifference: string = "";
  public modifiedTitle: string = "";

  constructor(private _priceService: TrackerService) { }

  ngOnInit(): void {
    this.priceDifference = this.trackerDefinition.priceData?.priceDifference.toString().replace(/-/g, "")!;
    this.modifiedTitle = this.trackerDefinition.title.length > 80 ?
      this.trackerDefinition.title?.substr(0, 80).trim() + "..." :
      this.trackerDefinition.title!;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  remove(){
    this.removeEmitter.emit(this.trackerDefinition.id);
  }

  displaySkeletonImage(){
    this.shouldDisplaySkeletonImage = true;
  }
}
