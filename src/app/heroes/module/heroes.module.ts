import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {HeroItemComponent} from '../hero-item/hero-item.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroItemComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    RouterModule
  ]
})
export class HeroesModule { }
