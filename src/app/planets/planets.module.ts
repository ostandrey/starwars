import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetItemListComponent } from './planet-item-list/planet-item-list.component';
import { PlanetItemComponent } from './planet-item/planet-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [PlanetsListComponent, PlanetItemListComponent, PlanetItemComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PlanetsModule { }
