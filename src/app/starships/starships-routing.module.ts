import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {StarshipsListComponent} from './starships-list/starships-list.component';
import {StarshipsItemComponent} from './starships-item/starships-item.component';


const routes: Routes = [
  {path: '', component: StarshipsListComponent},
  {path: 'starships/:id', component: StarshipsItemComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
