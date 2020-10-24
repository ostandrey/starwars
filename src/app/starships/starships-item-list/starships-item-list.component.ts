import {Component, Input, OnInit} from '@angular/core';
import {IStarship} from '../starships.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-starships-item-list',
  templateUrl: './starships-item-list.component.html',
  styleUrls: ['./starships-item-list.component.scss']
})
export class StarshipsItemListComponent {

  @Input() starship: IStarship;

  constructor( private router: Router) { }

  navigate(): void {
    const starshipUrlParse = this.starship.url.split('/');
    this.router.navigate(['starships/', starshipUrlParse]);
  }
}
