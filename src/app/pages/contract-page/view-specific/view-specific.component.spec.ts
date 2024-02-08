import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificComponent } from './view-specific.component';

describe('ViewSpecificComponent', () => {
  let component: ViewSpecificComponent;
  let fixture: ComponentFixture<ViewSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecificComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
