import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QueryService } from './query.service';
import { Drink } from './drink';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeSearchService {
  constructor(private queryService: QueryService) {}

  public results$: Observable<Drink[]>;
  public drinks: Drink[];
  public drinksGotten: boolean = false;
  private searchTerms = new Subject<string>();

  getDrinks(term: string) {
    console.log('calling');
    if (!term) {
      this.drinksGotten = false;
      return;
    }
    this.searchTerms.next(term);
    this.results$ = this.searchTerms.pipe(
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term) => this.queryService.getLikely(term))
    );
    this.results$.subscribe((x) => {
      if (x.length) {
        this.drinksGotten = true;
      } else this.drinksGotten = false;
      this.drinks = x;
    });
  }
}
