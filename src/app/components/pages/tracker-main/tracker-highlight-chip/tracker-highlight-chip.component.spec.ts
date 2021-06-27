import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerHighlightChipComponent } from './tracker-highlight-chip.component';

describe('TrackerHighlightChipComponent', () => {
  let component: TrackerHighlightChipComponent;
  let fixture: ComponentFixture<TrackerHighlightChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerHighlightChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerHighlightChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
