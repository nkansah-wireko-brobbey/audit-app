import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEngagementDetailsComponent } from './view-engagement-details.component';

describe('ViewEngagementDetailsComponent', () => {
  let component: ViewEngagementDetailsComponent;
  let fixture: ComponentFixture<ViewEngagementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEngagementDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEngagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
