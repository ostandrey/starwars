import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IHero} from '../heroes.interface';

@Component({
  selector: 'app-hero-item-list',
  templateUrl: './hero-item-list.component.html',
  styleUrls: ['./hero-item-list.component.scss']
})
export class HeroItemListComponent {

  @Input() hero: IHero;

  constructor(private router: Router){  }
  navigate(): void {
    console.log(this.hero.url);
    const heroUrlParsed = this.hero.url.split('/');
    this.router.navigate([`/heroes`, heroUrlParsed[5]]);
  }
}
