import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from '../heroes.component';

const routes: Routes = [
  { path: '', component: HeroesComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class HeroesRoutingModule { }
