import {Component, OnInit} from '@angular/core';
import {UcZoomViewConfig, UcZoomViewPosition} from "ngx-uc";

@Component({
  selector: 'app-zoom-view-position',
  templateUrl: './zoom-view-position.component.html',
  styleUrls: ['./zoom-view-position.component.css']
})
export class ZoomViewPositionComponent implements OnInit {

  customConfig: UcZoomViewConfig = {
    viewPosition: UcZoomViewPosition.LEFT,
    viewDistance: 20
  };

  constructor() { }

  ngOnInit(): void {
  }

}
