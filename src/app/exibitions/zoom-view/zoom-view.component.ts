import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom-view',
  templateUrl: './zoom-view.component.html',
  styleUrls: ['./zoom-view.component.css']
})
export class ZoomViewComponent implements OnInit {

  basicTemplate = '<img src="assets/img/example-1200x746.jpg" [style]="{\'width\': \'500px\'}" uc-zoom-view alt="Example image">';

  customCssTemplate = `<img src="assets/img/example-1200x746.jpg" [style]="{'width': '500px'}"
   uc-zoom-view [uc-zoom-view-config]="customConfig" alt="Example image">`;

  customComponent = `
customConfig: UcZoomViewConfig = {
  cssClasses: {
    zoomView: 'custom-img-zoom-result',
    lens: 'custom-img-zoom-lens',
    imageContainer: 'custom-img-container'
  }
};
  `;

  generalStyles = `
.custom-img-zoom-lens {
  position: absolute;
  border: 1px solid aqua;
  border-radius: 10px;
  /*set the size of the lens:*/
  background-color: white;
  opacity: 0.2;
  width: 100px;
  height: 100px;
}

.custom-img-zoom-result {
  position: absolute;
  top: 0;
  margin-left: 10px;
  border: 2px solid blue;
  border-radius: 20px;
  /*set the size of the result div:*/
  width: 500px;
  height: 500px;
}

.custom-img-container {
  position: relative;
  display: inline-block;
  border: 2px solid black;
}

.custom-img-container img {
  vertical-align: middle;
}
  `;

  externalizedTemplate = `
<div class="flex-container">
  <div>
    <img src="assets/img/example-1200x746.jpg" [style]="{'width': '500px'}"
         uc-zoom-view [uc-z-view]="externalView" alt="Example image">
  </div>

  <div>
    <div class="external-view" #externalView></div>
  </div>

</div>
  `;

  externalizedStyles = `

/* (...) other css styles here */

.external-view {
  width: 600px;
  height: 600px;
  border: 1px solid blue;
  margin-left: auto;
  margin-right: auto;
}
  `;

  viewPositionTemplate = `
<img src="assets/img/example-1200x746.jpg" [style]="{'width': '500px'}" uc-zoom-view [uc-zoom-view-config]="customConfig" alt="Example image">
  `;

  viewPositionComponent = `
customConfig: UcZoomViewConfig = {
  viewPosition: UcZoomViewPosition.LEFT,
  viewDistance: 20
};
  `;

  turnOnOffTemplate = `
<img src="assets/img/example-1200x746.jpg" [style]="{'width': '500px'}" uc-zoom-view [(ucZoomOn)]="on" alt="Example image">

<button (click)="toggleSwitch()">Turn Zoom {{!on ? 'on' : 'off'}}</button>
<strong style="margin-left: 10px">Zoom is:</strong><strong [style.color]="on? 'darkblue' : 'darkred'"> {{on? 'on' : 'off'}}</strong>
  `;

  turnOnOffComponent = `
on = true;

toggleSwitch(): void {
  this.on = !this.on;
}
  `;

  lensDimensionsTemplate = `
<div class="restrained-container">
  <img src="assets/img/example-1200x746.jpg" style="width: 500px" uc-zoom-view
       [uc-zoom-view-config]="customConfig" #zoomViewImgToResize="ucZoomView" alt="Example image"> <br>
</div>


<div class="range">
  <label for="imgWidthRange">Change the image width:</label>
  <input type="range" #imgWidthRange min="100" max="500" id="imgWidthRange" value="500" (input)="changeWidth(imgWidthRange, zoomViewImgToResize.image)" >
  <strong style="margin-left: 10px">Image width is:</strong><strong style="color: darkblue"> {{imageWidth}}px</strong>
</div>
  `;

  lensDimensionsComponent = `
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
    image.style.width = \`\${this.imageWidth}px\`;
  }

}
  `;

  eventsTemplate = `
<img [src]="imageSrc"
     uc-zoom-view #zoomView="ucZoomView" [style]="{'width': '500px'}" alt="Example image"
     [ucZoomOn]="turnedOn"
     (ready)="onReady($event)"
     (ucZoomOnChange)="onZoomTurnedOnOff($event)"
     (zoomStarted)="onZoomStarted()"
     (zoomEnded)="onZoomEnded()"
     (lensPosition)="onLensPositionChange($event)"
     (imageSrcChanged)="onSrcChanged($event)"
     (resizeLensDimensions)="onZoomLensResized($event)">
  `;

  eventsCode = `
// imports
import {UcZoomViewImageSourceChangedEvent, UcZoomViewReadyEvent, UcZoomViewResizeLensDimensionsEvent} from "ngx-uc";

// ...

export class ZoomViewEventsComponent implements OnInit {

  // ...

  onReady(event: UcZoomViewReadyEvent): void {
    this.ready = true;
  }

  onZoomTurnedOnOff(on: boolean): void {
    this.turnedOn = on;
  }

  onZoomStarted(): void {
    this.displayingZoom = true;
  }

  onZoomEnded(): void {
    this.displayingZoom = false;
    this.lensPosition.x = this.lensPosition.y = 0;
  }

  onSrcChanged(event: UcZoomViewImageSourceChangedEvent): void {
    this.srcChangedEvent = event;
  }

  onZoomLensResized(event: UcZoomViewResizeLensDimensionsEvent): void {
    this.oldLensDimensions = event.oldValue;
    this.newLensDimensions = event.newValue;
  }

  onLensPositionChange(event: UcCoordinates) {
    this.lensPosition = event;
  }

  // ...

}
  `;

  manualInitializationTemplate = `
<img src="assets/img/example-1200x746.jpg"
     [style]="{'width': '500px'}"
     uc-zoom-view #ucZoomView="ucZoomView"
     [uc-zoom-view-config]="customConfig"
     alt="Test image"> <br>

<button (click)="initializeZoomView()">Initialize Zoom View</button>
  `;

  manualInitializationCode = `
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
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
