import { TestBed } from '@angular/core/testing';

import { ActiveTrackerService } from './active-tracker.service';

describe('ActiveTrackerService', () => {
  let service: ActiveTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
