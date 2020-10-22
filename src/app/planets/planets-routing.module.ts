import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlanetsListComponent} from './planets-list/planets-list.component';
import {PlanetItemComponent} from './planet-item/planet-item.component';

const routes: Routes = [
  { path: '', component: PlanetsListComponent},
  { path: 'planets/:id', component: PlanetItemComponent}
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
