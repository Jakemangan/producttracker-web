import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTrackerDisplayComponent } from './active-tracker-display.component';

describe('ActiveTrackerDisplayComponent', () => {
  let component: ActiveTrackerDisplayComponent;
  let fixture: ComponentFixture<ActiveTrackerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveTrackerDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTrackerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
