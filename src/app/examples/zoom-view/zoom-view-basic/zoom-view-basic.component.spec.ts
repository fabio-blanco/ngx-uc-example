import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomViewBasicComponent } from './zoom-view-basic.component';

describe('ZoomViewBasicComponent', () => {
  let component: ZoomViewBasicComponent;
  let fixture: ComponentFixture<ZoomViewBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomViewBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomViewBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
