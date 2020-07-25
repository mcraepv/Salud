import { QueryService } from './../query.service';
import { Test } from './../models/test';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  test: Test[];

  constructor(
    private queryService: QueryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params.cocktailName);
      this.queryService
        .getCocktails(params.cocktailName)
        .subscribe((data) => {});
    });
  }

  // getCocktails(cocktailName) {
  //   this.queryService.getCocktails().subscribe((data) => {
  //     // console.log(data);
  //     this.test = data;
  //   });
  // }
}
