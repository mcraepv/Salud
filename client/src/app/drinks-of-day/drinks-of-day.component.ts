import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Drink } from '../drink';
import { QueryService } from '../query.service';
import { Router } from '@angular/router';
import { HomeSearchService } from '../home-search.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-drinks-of-day',
  templateUrl: './drinks-of-day.component.html',
  styleUrls: ['./drinks-of-day.component.css'],
})
export class DrinksOfDayComponent implements OnInit {
  constructor(
    private queryService: QueryService,
    private homeSearchService: HomeSearchService
  ) {}

  results$: Observable<Drink[]>;

  ngOnInit(): void {
    if (this.homeSearchService.results$) {
      this.results$ = this.homeSearchService.results$;
    } else this.results$ = this.queryService.getRandom();
  }
}

// getDrinks(term: string) {
//     console.log('calling');
//     this.searchTerms.next(term);
//     this.results$ = this.searchTerms.pipe(
//       debounceTime(300),
//       // ignore new term if same as previous term
//       distinctUntilChanged(),
//       // switch to new search observable each time the term changes
//       switchMap((term) => this.queryService.getLikely(term))
//     );
//   }
