import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes-list/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {HeroItemComponent} from './hero-item/hero-item.component';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HeroItemListComponent} from './hero-item-list/hero-item-list.component';

@NgModule({
    declarations: [
        HeroesComponent,
        HeroItemComponent,
        HeroItemListComponent
    ],
    exports: [
        HeroItemListComponent
    ],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class HeroesModule { }
