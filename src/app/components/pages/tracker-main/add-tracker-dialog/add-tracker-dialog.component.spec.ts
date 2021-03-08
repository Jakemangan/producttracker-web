import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrackerDialogComponent } from './add-tracker-dialog.component';

describe('AddTrackerDialogComponent', () => {
  let component: AddTrackerDialogComponent;
  let fixture: ComponentFixture<AddTrackerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrackerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrackerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
