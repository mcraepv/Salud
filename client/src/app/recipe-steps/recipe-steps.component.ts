import { QueryService } from './../query.service';
import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-steps',
  templateUrl: './recipe-steps.component.html',
  styleUrls: ['./recipe-steps.component.css'],
})
export class RecipeStepsComponent implements OnInit {
  @Input() cocktail: Cocktail;

  constructor(private queryService: QueryService) {}

  ngOnInit(): void {
    // console.log(this.cocktail);
  }
}
