import {Component, Input} from '@angular/core';
import {IHero, IHeroes} from '../heroes.interface';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent {

  @Input() heroes: IHero;

  // constructor() { }
  //
  // ngOnInit(): void {
  // }

}
