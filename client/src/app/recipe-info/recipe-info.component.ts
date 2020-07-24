import { QueryService } from './../query.service';
import { Cocktail } from './../models/cocktail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css'],
})
export class RecipeInfoComponent implements OnInit {
  cocktails: Cocktail[];
  constructor(private queryService: QueryService) {}

  ngOnInit(): void {}
}
