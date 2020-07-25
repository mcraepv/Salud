import { QueryService } from './../query.service';
import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css'],
})
export class RecipeIngredientsComponent implements OnInit {
  @Input() cocktail: Cocktail[];
  constructor(private queryService: QueryService) {}

  ngOnInit(): void {}
}
