import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IStarship, IStarships} from './starships.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  // tslint:disable-next-line:variable-name
  private _starships = new BehaviorSubject<IStarship[]>([]);
  readonly starships = this._starships.asObservable();
  // tslint:disable-next-line:variable-name
  private _starship = new BehaviorSubject<IStarship>(null);
  readonly starship = this._starship.asObservable();

  private starshipsUrl = 'https://swapi.dev/api/starships/';

  constructor( private http: HttpClient ) { }

  getStarships(): void {
    this.http.get<IStarships>(this.starshipsUrl)
      .subscribe(
        data => {
          this._starships.next(data.results);
        }
      );
  }

  getStarship(id: string): void {
    this.http.get<IStarship>(this.starshipsUrl + id)
      .subscribe(
        data => {
          this._starship.next(data);
        }
      );
  }
}
