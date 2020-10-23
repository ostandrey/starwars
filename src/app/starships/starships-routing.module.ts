import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {StarshipsListComponent} from './starships-list/starships-list.component';

const routes: Routes = [
  {path: '', component: StarshipsListComponent},
  {path: 'starships/:id', component: StarshipsListComponent},
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
