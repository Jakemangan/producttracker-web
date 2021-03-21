import {TrackingFrequency} from './TrackingFrequency';
import {TrackerDatapoint} from './TrackerDatapoint';

export interface ProductTracker {
  id?: string,
  owner: string;
  url: string,
  title?: string,
  imageUrl?: string,
  initialPrice?: number;
  currentPrice?: number;
  initialPricePretty?: string;
  currentPricePretty?: string;
  trackingFrequency?: TrackingFrequency,
  isAvailable?: boolean,
  dateStartedTracking?: number;
  currencyType?: string;
  datapoints?: TrackerDatapoint[]
}
