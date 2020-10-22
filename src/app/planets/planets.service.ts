import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IPlanet, IPlanets} from './planets.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  // tslint:disable-next-line:variable-name
  private _planets = new BehaviorSubject<IPlanet[]>([]);
  readonly planets = this._planets.asObservable();

  // tslint:disable-next-line:variable-name
  private _planet = new BehaviorSubject<IPlanet>(null);
  readonly planet = this._planet.asObservable();

  private planetUrl = 'https://swapi.dev/api/planets/';

  constructor(
    private http: HttpClient
  ) { }

  getPlanets(): void {
    this.http.get<IPlanets>(this.planetUrl)
      .subscribe(
        data => {
          console.log(data);
          this._planets.next(data.results);
        }
      );
  }

  getPlanet(id: string): void {
    this.http.get<IPlanet>(this.planetUrl + id)
      .subscribe(
        data => {
          this._planet.next(data);
        }
      );
  }
}
