import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients-info',
  templateUrl: './recipe-ingredients-info.component.html',
  styleUrls: ['./recipe-ingredients-info.component.css'],
})
export class RecipeIngredientsInfoComponent implements OnInit {
  @Input() cocktail: Cocktail;
  ingredients: Array<Object> = [];
  garnishes: Array<Object> = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getIngredients();
  }

  getIngredients() {
    if (this.cocktail) {
      for (var i = 0; i < this.cocktail.Ingredients.length; i++) {
        let ingredientObj = {
          amount: this.cocktail.Ingredients[i].CocktailIngredient.amount,
          measure: this.cocktail.Ingredients[i].measure,
          name: this.cocktail.Ingredients[i].name,
        };
        if (ingredientObj.measure !== 'garnish') {
          this.ingredients.push(ingredientObj);
        } else {
          this.garnishes.push(ingredientObj);
        }
      }
    }
  }
}
