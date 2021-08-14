import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomViewComponent } from "./exibitions/zoom-view/zoom-view.component";

const routes: Routes = [
  { path: 'zoom-view', component: ZoomViewComponent},
  { path: '', redirectTo: '/zoom-view', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
