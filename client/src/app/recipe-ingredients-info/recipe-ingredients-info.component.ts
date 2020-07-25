import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients-info',
  templateUrl: './recipe-ingredients-info.component.html',
  styleUrls: ['./recipe-ingredients-info.component.css'],
})
export class RecipeIngredientsInfoComponent implements OnInit {
  @Input() cocktail: Cocktail[];
  ingredients: string[];

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.getCocktail();
  }

  getCocktail() {
    if (this.cocktail) {
      // console.log(
      //   this.cocktail.Ingredients[0].CocktailIngredient.amount,
      //   this.cocktail.Measures[0].name,
      //   this.cocktail.Ingredients[0].name
      // );
    }
  }
}
