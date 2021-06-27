import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTrackerV2Component } from './product-tracker-v2.component';

describe('ProductTrackerV2Component', () => {
  let component: ProductTrackerV2Component;
  let fixture: ComponentFixture<ProductTrackerV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTrackerV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTrackerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
