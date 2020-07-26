import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-img',
  templateUrl: './recipe-img.component.html',
  styleUrls: ['./recipe-img.component.css'],
})
export class RecipeImgComponent implements OnInit {
  @Input() cocktail: Cocktail;
  url: string;
  source: string;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getUrl();
  }

  getUrl() {
    if (this.cocktail) {
      this.url = this.cocktail.imageUrl;
      this.source = this.cocktail.source;
    }
  }
}
