import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesModule } from './heroes/heroes.module';
import { PlanetsModule } from './planets/module/planets.module';
import { StarshipsModule} from './starships/module/starships.module';
import { RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';



const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
  {path: 'planets', loadChildren: () => import('./planets/module/planets.module').then(m => m.PlanetsModule)},
  {path: 'starships', loadChildren: () => import('./starships/module/starships.module').then(m => m.StarshipsModule)},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeroesModule,
    PlanetsModule,
    StarshipsModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
