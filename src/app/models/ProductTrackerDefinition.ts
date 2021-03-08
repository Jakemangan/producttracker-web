import {TrackingFrequency} from './TrackingFrequency';

export interface ProductTrackerDefinition {
  url: string,
  id?: string,
  title?: string,
  imageUrl?: string,
  initialPrice?: number;
  prettyPrice?: string;
  trackingFrequency?: TrackingFrequency,
  initialInstock?: boolean,
  dateStartedTracking?: number;
  currencyType?: string;
  owner: string;
}
