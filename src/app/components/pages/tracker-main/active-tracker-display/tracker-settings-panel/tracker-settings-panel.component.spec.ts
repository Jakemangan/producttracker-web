import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerSettingsPanelComponent } from './tracker-settings-panel.component';

describe('TrackerSettingsPanelComponent', () => {
  let component: TrackerSettingsPanelComponent;
  let fixture: ComponentFixture<TrackerSettingsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerSettingsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerSettingsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
