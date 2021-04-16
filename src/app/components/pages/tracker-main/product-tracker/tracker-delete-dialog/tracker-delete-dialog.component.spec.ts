import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerDeleteDialogComponent } from './tracker-delete-dialog.component';

describe('TrackerDeleteDialogComponent', () => {
  let component: TrackerDeleteDialogComponent;
  let fixture: ComponentFixture<TrackerDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
