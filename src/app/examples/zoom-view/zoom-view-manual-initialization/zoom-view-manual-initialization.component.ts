import {Component, OnInit, ViewChild} from '@angular/core';
import {UcZoomViewComponent, UcZoomViewConfig} from "ngx-uc";

@Component({
  selector: 'app-zoom-view-manual-initialization',
  templateUrl: './zoom-view-manual-initialization.component.html',
  styleUrls: ['./zoom-view-manual-initialization.component.css']
})
export class ZoomViewManualInitializationComponent implements OnInit {

  @ViewChild('ucZoomView')
  ucZoomView!: UcZoomViewComponent;

  customConfig: UcZoomViewConfig = {
    autoInitialize: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  initializeZoomView(): void {
    this.ucZoomView.initialize();
  }

}
