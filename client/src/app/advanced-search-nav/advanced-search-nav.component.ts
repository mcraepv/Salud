import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QueryService } from '../query.service';
import { Ingredient } from '../ingredient';

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
  };
  // private searchSub = new Subject();
  // searchVals: Array<string> = [];
  @Input() searchVals: Array<Object> = [];
  // results$: Observable<Drink[]>;
  @Output() sendToParent = new EventEmitter<Array<Object>>();

  onCheck(ingredientID, event) {
    if (event.target.checked) {
      this.searchVals.push(ingredientID);
      // this.searchSub.next(this.searchVals);
      this.sendToParent.emit(this.searchVals);
    } else {
      this.searchVals = this.searchVals.filter((el) => el !== ingredientID);
    }
  }

  updateProps(ingredients): void {
    this.ingredients = ingredients;

    for (let i = 0; i < this.ingredients.length; i++) {
      const check = this.ingredients[i].category;
      const ingredient = this.ingredients[i];
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

    // this.searchSub.subscribe({
    //   next: (searchVals: string[]) => {
    //     debounceTime(300);

    //     this.results$ = this.queryService.advancedSearch(searchVals);
    //     this.results$.subscribe((res) => {
    //       console.log('Nav: ', res);
    //       this.sendToParent.emit(res);
    //     });
    //   },
    // });
  }
}
