import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './heroes-list/heroes.component';
import {HeroItemComponent} from './hero-item/hero-item.component';

const routes: Routes = [
  { path: '', component: HeroesComponent},
  { path: 'heroes/1', component: HeroItemComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroesRoutingModule { }
