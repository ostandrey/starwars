import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsItemListComponent } from './starships-item-list.component';

describe('StarshipsItemListComponent', () => {
  let component: StarshipsItemListComponent;
  let fixture: ComponentFixture<StarshipsItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
