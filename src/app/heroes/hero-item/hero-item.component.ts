import {Component, Input, OnInit} from '@angular/core';
import {IHero, IHeroes} from '../heroes.interface';
import {HeroesService} from '../heroes.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss']
})
export class HeroItemComponent implements OnInit {

  hero$: Observable<IHero>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.hero$ = this.heroesService.hero;
    this.heroesService.getHero(this.activatedRoute.snapshot.params.id)
  }
}
