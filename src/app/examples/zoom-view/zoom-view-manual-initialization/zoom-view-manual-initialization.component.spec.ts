import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomViewManualInitializationComponent } from './zoom-view-manual-initialization.component';

describe('ZoomViewManualInitializationComponent', () => {
  let component: ZoomViewManualInitializationComponent;
  let fixture: ComponentFixture<ZoomViewManualInitializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomViewManualInitializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomViewManualInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
