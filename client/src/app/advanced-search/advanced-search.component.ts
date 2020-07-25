import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Drink } from '../drink';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css'],
})
export class AdvancedSearchComponent implements OnInit {
  constructor(private queryService: QueryService) {}

  private searchSub = new Subject();

  results$: Observable<Drink[]>;

  // drinksTop: Array<Object>;

  // drinksBottom: Array<Object>;

  getResults(res): void {
    console.log('parent: ', res);
    this.searchSub.next(res);
  }

  ngOnInit(): void {
    // this.drinkData.subscribe((data) => {
    //   this.drinksTop = data.splice(0, 4);
    //   this.drinksBottom = data.splice(0, 4);
    // });
    this.searchSub.subscribe({
      next: (searchVals: string[]) => {
        debounceTime(300);

        this.results$ = this.queryService.advancedSearch(searchVals);
        // this.results$.subscribe((res) => {
        //   console.log('Parent: ', res);
        // });
      },
    });
  }
}
