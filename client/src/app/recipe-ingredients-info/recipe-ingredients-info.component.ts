import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients-info',
  templateUrl: './recipe-ingredients-info.component.html',
  styleUrls: ['./recipe-ingredients-info.component.css'],
})
export class RecipeIngredientsInfoComponent implements OnInit {
  @Input() cocktail: Cocktail;
  ingredientsArray: object[];

  constructor() {}

  ngOnInit(): void {
    // console.log(this.ingredients);
  }

  ngOnChanges(): void {
    this.getIngredients();
  }

  getIngredients() {
    if (this.cocktail) {
      for (var i = 0; i < this.cocktail.Ingredients?.length; i++) {
        // let ingredientObj = {
        // name: this.cocktail.Ingredients[i].name,
        // amount: this.cocktail.Ingredients[i].CocktailIngredient.amount,
        // measure: this.cocktail.Measures[i].name,
        // };
        // this.ingredientsArray.push(ingredientObj);
        console.log(this.cocktail.Ingredients);
        console.log(this.cocktail.Ingredients[i]);
        // console.log(this.cocktail.Ingredients[i].CocktailIngredient);
      }
      // var number = {
      //   name: 6,
      // };
      // this.ingredientsArray.push(number);
      console.log(this.ingredientsArray);
    }
  }
}
