import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom-view-turn-on-off',
  templateUrl: './zoom-view-turn-on-off.component.html',
  styleUrls: ['./zoom-view-turn-on-off.component.css']
})
export class ZoomViewTurnOnOffComponent implements OnInit {

  on = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSwitch(): void {
    this.on = !this.on;
  }

}
