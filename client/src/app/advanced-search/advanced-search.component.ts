import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Drink } from '../drink';
import { QueryService } from '../query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css'],
})
export class AdvancedSearchComponent implements OnInit {
  constructor(private queryService: QueryService, private router: Router) {}

  private searchSub = new Subject();

  results$: Observable<Drink[]>;
  isSuccessful: boolean = true;

  getResults(res): void {
    if (res.length) {
      this.searchSub.next(res);
    } else {
      this.isSuccessful = true;
      this.results$ = this.queryService.initAdvanced();
    }
  }

  ngOnInit(): void {
    this.results$ = this.queryService.initAdvanced();
    this.searchSub.subscribe({
      next: (searchVals: number[]) => {
        debounceTime(300);

        this.results$ = this.queryService.advancedSearch(searchVals);
        this.results$.subscribe((x) => {
          console.log(x);
          if (!x.length) {
            this.isSuccessful = false;
            this.results$ = this.queryService.getRandom();
          } else this.isSuccessful = true;
        });
      },
    });
  }
}
