import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomViewPositionComponent } from './zoom-view-position.component';

describe('ZoomViewPositionComponent', () => {
  let component: ZoomViewPositionComponent;
  let fixture: ComponentFixture<ZoomViewPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomViewPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomViewPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
