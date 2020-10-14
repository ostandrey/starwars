import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from '../planets.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: PlanetsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
