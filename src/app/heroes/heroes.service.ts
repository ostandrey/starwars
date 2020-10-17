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
  private heroUrl = 'https://swapi.dev/api/people/';

  constructor(
    private http: HttpClient
  ) { }

  getHeroes(): void {
    this.http.get<IHeroes>(this.heroUrl)
      .subscribe(
        data => {
          this._heroes.next(data.results);
        }
      );
  }
}
