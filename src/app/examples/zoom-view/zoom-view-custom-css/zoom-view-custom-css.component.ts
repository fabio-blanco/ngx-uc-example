import { Component, OnInit } from '@angular/core';

import {UcZoomViewConfig} from "ngx-uc";

@Component({
  selector: 'app-zoom-view-custom-css',
  templateUrl: './zoom-view-custom-css.component.html',
  styleUrls: ['./zoom-view-custom-css.component.css']
})
export class ZoomViewCustomCssComponent implements OnInit {

  customConfig: UcZoomViewConfig = {
    cssClasses: {
      zoomView: 'custom-img-zoom-result',
      lens: 'custom-img-zoom-lens',
      imageContainer: 'custom-img-container'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
