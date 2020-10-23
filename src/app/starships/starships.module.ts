import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { StarshipsItemListComponent } from './starships-item-list/starships-item-list.component';
import { StarshipsItemComponent } from './starships-item/starships-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [StarshipsListComponent, StarshipsItemListComponent, StarshipsItemComponent],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ]
})
export class StarshipsModule { }
