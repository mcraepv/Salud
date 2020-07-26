import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients-info',
  templateUrl: './recipe-ingredients-info.component.html',
  styleUrls: ['./recipe-ingredients-info.component.css'],
})
export class RecipeIngredientsInfoComponent implements OnInit {
  @Input() cocktail: Cocktail;
  ingredientsArray: Array<Object>;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.ingredients);
  }

  ngOnChanges(): void {
    // this.getIngredients();
  }

  // getIngredients() {
  //   if (this.cocktail) {
  //     console.log(this.cocktail.Ingredients);
  //     for (var i = 0; i < this.cocktail.Ingredients.length; i++) {
  //       let ingredientObj = {
  //         name: this.cocktail.Ingredients[i].name,
  //         amount: this.cocktail.Ingredients[i].CocktailIngredient.amount,
  //         measure: this.cocktail.Measures[i].name,
  //       };
  //       console.log(this);
  //       console.log(ingredientObj);
  //       this.ingredientsArray.push(ingredientObj);
  //     }
  //     // var number = {
  //     //   name: 6,
  //     // };
  //     // this.ingredientsArray.push(number);
  //     console.log(this.ingredientsArray);
  //   }
  // }
}
