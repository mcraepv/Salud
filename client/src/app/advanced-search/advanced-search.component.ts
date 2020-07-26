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

  getResults(res): void {
    this.searchSub.next(res);
  }

  goRecipe(cocktail) {
    this.router.navigate(['/recipe'], {
      queryParams: { cocktailName: cocktail },
    });
  }

  ngOnInit(): void {
    this.searchSub.subscribe({
      next: (searchVals: number[]) => {
        debounceTime(300);

        this.results$ = this.queryService.advancedSearch(searchVals);
      },
    });
  }
}
