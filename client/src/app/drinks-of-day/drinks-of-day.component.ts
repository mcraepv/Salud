import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../drink';
import { QueryService } from '../query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinks-of-day',
  templateUrl: './drinks-of-day.component.html',
  styleUrls: ['./drinks-of-day.component.css'],
})
export class DrinksOfDayComponent implements OnInit {
  constructor(private queryService: QueryService) {}

  results$: Observable<Drink[]>;

  ngOnInit(): void {
    this.results$ = this.queryService.getRandom();
  }
}
