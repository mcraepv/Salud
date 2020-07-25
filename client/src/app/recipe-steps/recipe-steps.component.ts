import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-steps',
  templateUrl: './recipe-steps.component.html',
  styleUrls: ['./recipe-steps.component.css'],
})
export class RecipeStepsComponent implements OnInit {
  @Input() cocktail: Cocktail;
  instructions: string;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.cocktail);
  }

  ngOnChanges(): void {
    this.getCocktail();
  }

  getCocktail() {
    if (this.cocktail) {
      this.instructions = this.cocktail.instructions;
    }
  }
}
