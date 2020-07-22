import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksOfDayComponent } from './drinks-of-day.component';

describe('DrinksOfDayComponent', () => {
  let component: DrinksOfDayComponent;
  let fixture: ComponentFixture<DrinksOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
