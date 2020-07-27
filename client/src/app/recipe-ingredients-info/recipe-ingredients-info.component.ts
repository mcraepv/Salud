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
      for (var i = 0; i < this.cocktail.CocktailIngredients.length; i++) {
        let ingredientObj = {
          amount: this.cocktail.CocktailIngredients[i].amount,
          measure: this.cocktail.CocktailIngredients[i].Ingredient.measure,
          name: this.cocktail.CocktailIngredients[i].Ingredient.name,
        };
        if (ingredientObj.measure !== 'garnish') {
          this.ingredients.push(ingredientObj);
        } else {
          this.garnishes.push(ingredientObj);
        }
      }
      // console.log(this.ingredients);
      // console.log(this.garnishes);
    }
  }
}
