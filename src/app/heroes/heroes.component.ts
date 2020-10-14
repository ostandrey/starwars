import { Component, OnInit } from '@angular/core';
import {HeroesService} from './heroes.service';
import {IHeroes} from './heroes.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes: IHeroes[] = [
    {
      id: 1,
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
    },
  ];

  // heroes$: Observable<IHeroes[]>;
  //
  // constructor(
  //   private heroesService: HeroesService
  // ) { }
  //
  // ngOnInit(): void {
  //   this.heroes$ = this.heroesService.heroesItems;
  // }
  //
  // returnHeroes(): void {
  //   this.heroesService.returnHeroesList();
  // }
}
