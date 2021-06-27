import {TrackingFrequency} from './TrackingFrequency';
import {TrackerDatapoint} from './TrackerDatapoint';

export interface ProductTracker {
  id?: string,
  owner: string;
  url: string,
  siteHostname?: string;
  title?: string,
  imageUrl?: string,
  priceData?: ProductTrackerPriceData
  trackingFrequency?: TrackingFrequency,
  isAvailable?: boolean,
  dateStartedTracking?: number;
  currencyType?: string;
  datapoints?: TrackerDatapoint[]
}

export interface ProductTrackerPriceData {
  currentPrice: number;
  currentPricePretty: string;
  initialPrice: number;
  initialPricePretty: string;
  priceDifference: number;
}
