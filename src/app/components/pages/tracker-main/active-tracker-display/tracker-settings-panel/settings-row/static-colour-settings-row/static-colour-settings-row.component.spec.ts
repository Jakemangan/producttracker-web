import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticColourSettingsRowComponent } from './static-colour-settings-row.component';

describe('StaticColourSettingsRowComponent', () => {
  let component: StaticColourSettingsRowComponent;
  let fixture: ComponentFixture<StaticColourSettingsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticColourSettingsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticColourSettingsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
