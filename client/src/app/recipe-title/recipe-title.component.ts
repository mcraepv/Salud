import { Test } from './../models/test';
import { Cocktail } from './../models/cocktail';
import { QueryService } from './../query.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.css'],
})
export class RecipeTitleComponent implements OnInit {
  @Input() test: Test;
  cocktails: Cocktail[];
  constructor(private queryService: QueryService) {}

  ngOnInit(): void {}
}
