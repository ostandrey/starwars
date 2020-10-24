import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IStarship} from '../starships.interface';
import {StarshipsService} from '../starships.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-starships-item',
  templateUrl: './starships-item.component.html',
  styleUrls: ['./starships-item.component.scss']
})
export class StarshipsItemComponent implements OnInit {

  starship$: Observable<IStarship>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private starshipService: StarshipsService
  ) { }

  ngOnInit(): void {
    this.starship$ = this.starshipService.starship;
    this.starshipService.getStarship(this.activatedRoute.snapshot.params.id);
  }
}
