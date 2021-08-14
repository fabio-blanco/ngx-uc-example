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

  constructor() { }

  ngOnInit(): void {
  }

}
