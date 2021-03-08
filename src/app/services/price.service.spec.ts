import { TestBed } from '@angular/core/testing';

import { TrackerService } from './tracker.service';

describe('PriceService', () => {
  let service: TrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
