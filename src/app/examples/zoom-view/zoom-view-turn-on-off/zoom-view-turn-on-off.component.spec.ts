import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomViewTurnOnOffComponent } from './zoom-view-turn-on-off.component';

describe('ZoomViewTurnOnOffComponent', () => {
  let component: ZoomViewTurnOnOffComponent;
  let fixture: ComponentFixture<ZoomViewTurnOnOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomViewTurnOnOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomViewTurnOnOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
