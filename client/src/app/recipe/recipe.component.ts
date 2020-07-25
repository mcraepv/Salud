import { QueryService } from './../query.service';
import { Test } from './../models/test';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  test: Test[];

  constructor(private queryService: QueryService) {}

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails() {
    this.queryService.getCocktails().subscribe((data) => {
      console.log(data);
      this.test = data;
    });
  }
}
