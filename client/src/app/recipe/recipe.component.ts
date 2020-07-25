import { Cocktail } from './../models/cocktail';
import { QueryService } from './../query.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  cocktail: Cocktail[];

  constructor(private queryService: QueryService) {}

  ngOnInit(): void {
    this.queryService.getCocktails().subscribe((data) => {
      console.log(data);
      this.cocktail = data;
    });
  }
}
