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
  private searchTerms = new Subject<string>();
  endAt = new Subject();

  constructor(
    private heroesService: HeroesService
  ) { }

  searchHero(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroesService.searchHero(term))
    );
    this.heroesService.getHeroes();
  }


}
