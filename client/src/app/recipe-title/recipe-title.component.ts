import { Cocktail } from './../models/cocktail';
import { QueryService } from './../query.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.css'],
})
export class RecipeTitleComponent implements OnInit {
  @Input() cocktail: Cocktail;

  constructor(private queryService: QueryService) {}

  ngOnInit(): void {
    this.getCocktail();
  }

  getCocktail() {
    console.log(this.cocktail);
    return this.cocktail;
  }
}
