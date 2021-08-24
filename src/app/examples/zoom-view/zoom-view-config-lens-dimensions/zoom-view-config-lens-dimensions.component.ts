import {Component, OnInit} from '@angular/core';
import {UcZoomViewConfig, UcZoomViewLensProportionType} from "ngx-uc";

@Component({
  selector: 'app-zoom-view-config-lens-dimensions',
  templateUrl: './zoom-view-config-lens-dimensions.component.html',
  styleUrls: ['./zoom-view-config-lens-dimensions.component.css']
})
export class ZoomViewConfigLensDimensionsComponent implements OnInit {

  imageWidth = 500;

  customConfig: UcZoomViewConfig = {
    lensOptions: {
      baseProportionType: UcZoomViewLensProportionType.SMALLER_SIZE,
      sizeProportion: 0.3
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeWidth(imgWidthRangeInput: HTMLInputElement, image:HTMLImageElement) {
    let value = imgWidthRangeInput.value;
    this.imageWidth = parseInt(value);
    image.style.width = `${this.imageWidth}px`;
  }

}
