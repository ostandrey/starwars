import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IHeroes} from './heroes.interface';

const heroesList: IHeroes[] = [];

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // tslint:disable-next-line:variable-name
  private _heroesItems = new BehaviorSubject<IHeroes[]>([]);
  public heroesItems = this._heroesItems.asObservable();

  constructor() { }

  returnHeroesList(): void {
    return this._heroesItems.next(heroesList);
  }
}
