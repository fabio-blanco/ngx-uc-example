import { Component, OnInit } from '@angular/core';
import {UcCoordinates, UcZoomViewImageSourceChangedEvent, UcZoomViewReadyEvent, UcZoomViewResizeLensDimensionsEvent} from "ngx-uc";

@Component({
  selector: 'app-zoom-view-events',
  templateUrl: './zoom-view-events.component.html',
  styleUrls: ['./zoom-view-events.component.css']
})
export class ZoomViewEventsComponent implements OnInit {

  ready = false;
  turnedOn = true;
  displayingZoom = false;
  imageSrc = "assets/img/example-1200x746.jpg"

  srcChangedEvent?:UcZoomViewImageSourceChangedEvent;

  oldLensDimensions?: number | null;

  newLensDimensions?: number;

  lensPosition: UcCoordinates = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {
  }

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

  swapImages(): void {
    const otherImage = "assets/img/example-2-1199x746.jpg";

    if (this.imageSrc !== otherImage) {
      this.imageSrc = otherImage;
    } else {
      if (this.srcChangedEvent) {
        this.imageSrc = this.srcChangedEvent.oldValue;
      } else {
        throw Error('You can\'t do that!');
      }
    }
  }

  changeImageWidth(imgWidthRangeInput: HTMLInputElement, image:HTMLImageElement) {
    let value = parseInt(imgWidthRangeInput.value);
    image.style.width = `${value}px`;
  }

  toogleComponentTurnedOnOff(): void {
    this.turnedOn = !this.turnedOn;
  }

}
