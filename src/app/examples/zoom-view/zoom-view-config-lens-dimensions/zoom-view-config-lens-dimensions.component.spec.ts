import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomViewConfigLensDimensionsComponent } from './zoom-view-config-lens-dimensions.component';

describe('ZoomViewConfigLensDimensionsComponent', () => {
  let component: ZoomViewConfigLensDimensionsComponent;
  let fixture: ComponentFixture<ZoomViewConfigLensDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomViewConfigLensDimensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomViewConfigLensDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
