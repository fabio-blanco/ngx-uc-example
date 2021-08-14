import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomViewExternalizedViewComponent } from './zoom-view-externalized-view.component';

describe('ZoomViewExternalizedViewComponent', () => {
  let component: ZoomViewExternalizedViewComponent;
  let fixture: ComponentFixture<ZoomViewExternalizedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomViewExternalizedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomViewExternalizedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
