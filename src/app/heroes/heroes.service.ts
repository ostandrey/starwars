import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
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
  private herosUrl = 'https://swapi.dev/api/people/';

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): void {
    this.http.get<IHeroes>(this.herosUrl)
      .subscribe(
        data => {
          console.log(data);
          this._heroes.next(data.results);
        }
      );
  }

  getHero(id: string): void {
    this.http.get<IHero>(this.herosUrl + id)
      .subscribe(
        data => {
          console.log(data);
          this._hero.next(data);
        }
      );
  }
}
