import { Component} from '@angular/core';
import {IHeroes} from '../heroes.interface';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {


  heroes: IHeroes[];

  // constructor() { }
  //
  // ngOnInit(): void {
  // }

}
