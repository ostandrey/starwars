import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {IHero, IHeroes} from './heroes.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // tslint:disable-next-line:variable-name
  private _heroes = new BehaviorSubject<IHero[]>([]);
  readonly heroes = this._heroes.asObservable();
  // tslint:disable-next-line:variable-name
  private _hero = new BehaviorSubject<IHero>(null);
  readonly hero = this._hero.asObservable();
  private heroesUrl = 'https://swapi.dev/api/people/';

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): void {
    this.http.get<IHeroes>(this.heroesUrl)
      .subscribe(
        data => {
          this._heroes.next(data.results);
        }
      );
  }

  getHero(id: string): void {
    this.http.get<IHero>(this.heroesUrl + id)
      .subscribe(
        data => {
          this._hero.next(data);
        }
      );
  }

  searchHero(term: string): Observable<IHero[]> {
    if (!term.trim()) {
      return this.heroes;
    }
  }
}
