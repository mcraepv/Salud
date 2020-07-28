import { Cocktail } from './../models/cocktail';
import { QueryService } from './../query.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  cocktail: Cocktail;

  constructor(
    private queryService: QueryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const cocktailName: string = this.route.snapshot.paramMap.get(
      'cocktailName'
    );
    this.queryService.getCocktail(cocktailName).subscribe((data) => {
      this.cocktail = data[0];
    });
  }
}
