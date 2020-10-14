import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesModule } from './heroes/module/heroes.module';
import { PlanetsModule } from './planets/module/planets.module';
import { StarshipsModule} from './starships/module/starships.module';
import {Router, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'heroes', loadChildren: () => import('./heroes/module/heroes.module').then(m => m.HeroesModule)},
  {path: 'planets', loadChildren: () => import('./planets/module/planets.module').then(m => m.PlanetsModule)},
  {path: 'starships', loadChildren: () => import('./starships/module/starships.module').then(m => m.StarshipsModule)},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeroesModule,
    PlanetsModule,
    StarshipsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
