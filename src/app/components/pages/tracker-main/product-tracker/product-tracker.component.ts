import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {TrackerService} from '../../../../services/tracker.service';
import {ProductTracker} from '../../../../models/ProductTracker';
import {
  faChartArea,
  faClock,
  faCog,
  faEllipsisH,
  faEnvelope,
  faExternalLinkAlt,
  faImage,
  faShoppingBag,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {TrackerDeleteDialogComponent} from './tracker-delete-dialog/tracker-delete-dialog.component';
import {TrackingFrequency} from '../../../../models/TrackingFrequency';
import {ProductTrackerConfig} from '../../../../models/ProductTrackerConfig';


@Component({
  selector: 'app-product-tracker',
  templateUrl: './product-tracker.component.html',
  styleUrls: ['./product-tracker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductTrackerComponent implements OnInit, OnChanges {

  @Input() trackerDefinition!: ProductTracker;
  @Input() isSkeleton: boolean;
  @Output() removeEmitter: EventEmitter<string> = new EventEmitter<string>();

  public faEllipsisH = faEllipsisH;
  public faChartArea = faChartArea;
  public faShoppingBag = faShoppingBag;
  public faExternalLinkAlt = faExternalLinkAlt;
  public faImage = faImage;
  public faTimes = faTimes;
  public faClock = faClock;
  public faEnvelope = faEnvelope;
  public faCog = faCog;

  public prettyPrice!: string;
  public loading: boolean = false;
  public shouldDisplaySkeletonImage = false;
  public priceDifference: string = "";
  public modifiedTitle: string = "";
  public hostname: string = "";

  public frequencyNumber: string = "";
  public frequencyUnit: string = "";
  public frequencyPretty: string = "";

  constructor(private _trackerService: TrackerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.priceDifference = this.getPriceDifferenceString(this.trackerDefinition.priceData?.priceDifference);
    if(this.trackerDefinition.title){
      this.modifiedTitle = this.trackerDefinition.title.length > 80 ?
        this.trackerDefinition.title?.substr(0, 80).trim() + "..." :
        this.trackerDefinition.title!;
    }

    this.hostname = new URL(this.trackerDefinition.url).hostname.replace("www.", "");
    this.setFrequencyDisplay();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  getPriceDifferenceString(priceDifference: number){
    if(Math.abs(priceDifference) > 0 && Math.abs(priceDifference) < 1){
      return "< 1%";
    }

    return Math.round(priceDifference).toString().replace(/-/g, "") + "%";
  }

  remove(){
    const dialogRef = this.dialog.open(TrackerDeleteDialogComponent, {
      width: "600px",
      data: {
        title: this.trackerDefinition.title
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.removeEmitter.emit(this.trackerDefinition.id);
      }
    })
  }

  updateTrackerConfig(idToUpdate: string, config: ProductTrackerConfig){
    this._trackerService.updateTracker(idToUpdate, config).subscribe((res: ProductTracker) => {
      this.trackerDefinition = res;
      this.setFrequencyDisplay();
    })
  }

  toggleFrequency(){
    let newConfig: ProductTrackerConfig;
    //TODO :: Replace with switch
    if(this.trackerDefinition.trackingFrequency === TrackingFrequency.Weekly){
      newConfig = {
        trackingFrequency: TrackingFrequency.Daily
      }
    } else {
      newConfig = {
        trackingFrequency: TrackingFrequency.Weekly
      }
    }

    this.updateTrackerConfig(this.trackerDefinition.id, newConfig);
  }

  setFrequencyDisplay(){
    switch(this.trackerDefinition.trackingFrequency){
      case TrackingFrequency.Daily:
        this.frequencyNumber = "24";
        this.frequencyUnit = "hr";
        this.frequencyPretty = "24 hours";
        break;
      case TrackingFrequency.Weekly:
        this.frequencyNumber = "1";
        this.frequencyUnit = "w";
        this.frequencyPretty = "1 week";
        break;
      default:
        this.frequencyNumber = "";
        this.frequencyUnit = "";
        this.frequencyPretty = "";
        break;
    }
  }

  displaySkeletonImage(){
    this.shouldDisplaySkeletonImage = true;
  }
}
