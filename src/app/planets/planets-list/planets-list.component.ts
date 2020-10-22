import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IPlanet} from '../planets.interface';
import {PlanetsService} from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  planets$: Observable<IPlanet[]>;

  constructor(
    private planetsService: PlanetsService
  ) { }

  ngOnInit(): void {
    this.planets$ = this.planetsService.planets;
    this.planetsService.getPlanets();
  }

}
