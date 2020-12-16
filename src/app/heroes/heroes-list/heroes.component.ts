import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../heroes.service';
import {IHero} from '../heroes.interface';
import {Observable, Subject} from 'rxjs';
import {debounce, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit{

  heroes$: Observable<IHero[]>;

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroes$ = this.heroesService.heroes;
    this.heroesService.getHeroes();
  }


}
