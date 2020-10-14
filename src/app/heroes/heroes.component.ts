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
      name: 'Luke Skywalker'
    },
    {
      id: 2,
      name: 'Darth Vader'
    }
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
