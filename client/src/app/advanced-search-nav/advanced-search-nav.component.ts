import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-advanced-search-nav',
  templateUrl: './advanced-search-nav.component.html',
  styleUrls: ['./advanced-search-nav.component.css'],
})
export class AdvancedSearchNavComponent implements OnInit {
  constructor(private queryService: QueryService) {}

  //this breaks the thing
  // getIngredient(ingredient: string): void {
  //   return this.queryService.getIngredientByType(ingredient);
  // }

  ngOnInit(): void {}
}
