import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";

import { NgxUcModule } from "ngx-uc";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomViewBasicComponent } from './examples/zoom-view/zoom-view-basic/zoom-view-basic.component';
import { ZoomViewComponent } from './exibitions/zoom-view/zoom-view.component';
import { ZoomViewCustomCssComponent } from './examples/zoom-view/zoom-view-custom-css/zoom-view-custom-css.component';
import { ZoomViewExternalizedViewComponent } from './examples/zoom-view/zoom-view-externalized-view/zoom-view-externalized-view.component';
import { ZoomViewPositionComponent } from './examples/zoom-view/zoom-view-position/zoom-view-position.component';
import { ZoomViewTurnOnOffComponent } from './examples/zoom-view/zoom-view-turn-on-off/zoom-view-turn-on-off.component';


@NgModule({
  declarations: [
    AppComponent,
    ZoomViewBasicComponent,
    ZoomViewComponent,
    ZoomViewCustomCssComponent,
    ZoomViewExternalizedViewComponent,
    ZoomViewPositionComponent,
    ZoomViewTurnOnOffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    NgxUcModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
