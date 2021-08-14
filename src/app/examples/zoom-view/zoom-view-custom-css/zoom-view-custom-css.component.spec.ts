import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomViewCustomCssComponent } from './zoom-view-custom-css.component';

describe('ZoomViewCustomCssComponent', () => {
  let component: ZoomViewCustomCssComponent;
  let fixture: ComponentFixture<ZoomViewCustomCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomViewCustomCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomViewCustomCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
