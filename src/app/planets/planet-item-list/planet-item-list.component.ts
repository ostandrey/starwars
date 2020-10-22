import {Component, Input, OnInit} from '@angular/core';
import {IPlanet} from '../planets.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planet-item-list',
  templateUrl: './planet-item-list.component.html',
  styleUrls: ['./planet-item-list.component.scss']
})
export class PlanetItemListComponent {

  @Input() planet: IPlanet;

  constructor(
    private router: Router
  ) { }

  navigate(): void {
    const planetUrlParsed = this.planet.url.split('/');
    this.router.navigate(['/planets', planetUrlParsed[5]]);
  }

}
