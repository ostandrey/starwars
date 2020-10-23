import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsItemComponent } from './starships-item.component';

describe('StarshipsItemComponent', () => {
  let component: StarshipsItemComponent;
  let fixture: ComponentFixture<StarshipsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
