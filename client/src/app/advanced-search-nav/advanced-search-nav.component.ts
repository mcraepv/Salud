import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { Ingredient } from '../ingredient';
import { Observable, Subject, ObservableInput } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Drink } from '../drink';

@Component({
  selector: 'app-advanced-search-nav',
  templateUrl: './advanced-search-nav.component.html',
  styleUrls: ['./advanced-search-nav.component.css'],
})
export class AdvancedSearchNavComponent implements OnInit {
  constructor(private queryService: QueryService) {}
  ingredients: Ingredient[];
  categoriesObj: Object = {
    spirits: [],
    liqueurs: [],
    wines: [],
    beers: [],
    mixers: [],
    others: [],
  };
  private searchSub = new Subject();
  results$: Observable<Drink[]>;
  searchVals: Array<string> = [];

  onCheck(ingredient, event) {
    console.log(event.target.checked);
    if (event.target.checked) {
      this.searchVals.push(ingredient);
      console.log(this.searchVals);
      this.searchSub.next(this.searchVals);
    } else {
      this.searchVals = this.searchVals.filter((el) => el !== ingredient);
      console.log(this.searchVals);
    }
  }

  updateProps(ingredients): void {
    this.ingredients = ingredients;

    for (let i = 0; i < this.ingredients.length; i++) {
      const check = this.ingredients[i].category;
      const ingredient = this.ingredients[i].name;
      const propArr = Object.getOwnPropertyNames(this.categoriesObj);
      for (let x = 0; x < propArr.length; x++) {
        if (check === propArr[x]) {
          this.categoriesObj[propArr[x]].push(ingredient);
        }
      }
    }
  }

  getIngredients(): void {
    this.queryService.getIngredients().subscribe((ingredients) => {
      this.updateProps(ingredients);
    });
  }

  ngOnInit(): void {
    this.getIngredients();

    this.searchSub.subscribe({
      next: (searchVals: string[]) => {
        console.log(`observerA: ${typeof searchVals}`);
        debounceTime(300);

        console.log(searchVals);
        this.queryService.advancedSearch(searchVals);
      },
    });
  }
}
