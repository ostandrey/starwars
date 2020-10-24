import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IStarship} from '../starships.interface';
import {StarshipsService} from '../starships.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent implements OnInit {

  starships$: Observable<IStarship[]>;

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit(): void {
    this.starships$ = this.starshipsService.starships;
    this.starshipsService.getStarships();
  }

}
