import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { HeroesComponent } from './heroes/heroes.component';
import { StarshipsComponent } from './starships/starships.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    HeroesComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
