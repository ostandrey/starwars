import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetItemListComponent } from './planet-item-list.component';

describe('PlanetItemListComponent', () => {
  let component: PlanetItemListComponent;
  let fixture: ComponentFixture<PlanetItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
