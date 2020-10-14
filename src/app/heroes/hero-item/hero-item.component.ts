import { Component, OnInit } from '@angular/core';
import {IHeroes} from '../heroes.interface';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {


  heroes: IHeroes[] = [
    {
      id: 1,
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
    },
  ];

  // constructor() { }
  //
  // ngOnInit(): void {
  // }

}
