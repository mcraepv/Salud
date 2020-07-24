import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
    others: [],
  };
  test: string = 'foo';

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
    console.log(this.categoriesObj);
  }

  getIngredients(): void {
    this.queryService.getIngredients().subscribe((ingredients) => {
      this.updateProps(ingredients);
    });
  }

  ngOnInit(): void {
    this.getIngredients();
  }
}
