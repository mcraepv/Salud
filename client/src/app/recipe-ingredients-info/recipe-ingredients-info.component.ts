import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients-info',
  templateUrl: './recipe-ingredients-info.component.html',
  styleUrls: ['./recipe-ingredients-info.component.css'],
})
export class RecipeIngredientsInfoComponent implements OnInit {
  @Input() cocktail: Cocktail;
  ingredients: object[];

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.getIngredients();
  }

  getIngredients() {
    if (this.cocktail) {
      // console.log(this.cocktail.Ingredients?.length);
      // for (var i = 0; i < this.cocktail.Ingredients?.length; i++) {
      //   let ingredient = {
      //     name: this.cocktail.Ingredients[i].name,
      //     amount: this.cocktail.Ingredients[i].CocktailIngredient.amount,
      //     measure: this.cocktail.Measures[i].name,
      //   };
      //   this.ingredients.push(ingredient);
      // }
      // console.log(this.ingredients);
    }
  }
}
