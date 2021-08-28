import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomViewEventsComponent } from './zoom-view-events.component';

describe('ZoomViewEventsComponent', () => {
  let component: ZoomViewEventsComponent;
  let fixture: ComponentFixture<ZoomViewEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomViewEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomViewEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
