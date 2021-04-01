import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerChartComponent } from './tracker-chart.component';

describe('TrackerChartComponent', () => {
  let component: TrackerChartComponent;
  let fixture: ComponentFixture<TrackerChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
