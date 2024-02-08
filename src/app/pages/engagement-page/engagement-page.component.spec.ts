import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementPageComponent } from './engagement-page.component';

describe('EngagementPageComponent', () => {
  let component: EngagementPageComponent;
  let fixture: ComponentFixture<EngagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
