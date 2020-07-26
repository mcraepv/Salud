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

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getInstructions();
  }

  getInstructions() {
    if (this.cocktail) {
      this.instructions = this.cocktail.instructions;
    }
  }
}
