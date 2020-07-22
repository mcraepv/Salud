import { Component, OnInit } from '@angular/core';
import { dummyDrinks } from '../dummy-drinks';

@Component({
  selector: 'app-drinks-of-day',
  templateUrl: './drinks-of-day.component.html',
  styleUrls: ['./drinks-of-day.component.css'],
})
export class DrinksOfDayComponent implements OnInit {
  constructor() {}

  drinksTop = dummyDrinks.splice(0, 4);

  drinksBottom = dummyDrinks;

  ngOnInit(): void {}
}
