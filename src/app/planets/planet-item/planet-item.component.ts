import { Component, OnInit } from '@angular/core';
import {IPlanet} from '../planets.interface';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PlanetsService} from '../planets.service';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.scss']
})
export class PlanetItemComponent implements OnInit {

  planet$: Observable<IPlanet>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private planetService: PlanetsService
  ) { }

  ngOnInit(): void {
    this.planet$ = this.planetService.planet;
    this.planetService.getPlanet(this.activatedRoute.snapshot.params.id);
  }

}
