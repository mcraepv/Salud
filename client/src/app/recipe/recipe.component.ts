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
  cocktail: Cocktail[];

  constructor(
    private queryService: QueryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const cocktailName: string = this.route.snapshot.paramMap.get(
      'cocktailName'
    );
    // console.log(cocktailName);
    this.queryService.getCocktail(cocktailName).subscribe((data) => {
      this.cocktail = data;
      // console.log(data);
    });
  }

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe((params) => {
  //     console.log(params.cocktailName);
  //     this.queryService.getCocktail(params.cocktailName).subscribe((data) => {
  //       this.cocktail = data;
  //     });
  //   });
  // }
}
