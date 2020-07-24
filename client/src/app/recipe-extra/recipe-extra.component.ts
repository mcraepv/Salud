import { QueryService } from './../query.service';
import { Cocktail } from './../models/cocktail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-extra',
  templateUrl: './recipe-extra.component.html',
  styleUrls: ['./recipe-extra.component.css'],
})
export class RecipeExtraComponent implements OnInit {
  cocktails: Cocktail[];
  constructor(private queryService: QueryService) {}

  ngOnInit(): void {}
}
