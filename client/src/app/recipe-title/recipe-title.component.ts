import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.css'],
})
export class RecipeTitleComponent implements OnInit {
  @Input() cocktail: Cocktail;
  name: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getName();
  }

  getName() {
    if (this.cocktail) {
      this.name = this.cocktail.name;
    }
  }
}
