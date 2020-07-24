import { Test } from './../models/test';
import { Cocktail } from './../models/cocktail';
import { QueryService } from './../query.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.css'],
})
export class RecipeTitleComponent implements OnInit {
  test: Test[];
  title: string = 'Margarita';
  cocktails: Cocktail[];
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
