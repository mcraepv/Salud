import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-img',
  templateUrl: './recipe-img.component.html',
  styleUrls: ['./recipe-img.component.css'],
})
export class RecipeImgComponent implements OnInit {
  @Input() cocktail: Cocktail;
  itemImageUrl: string =
    'https://images.unsplash.com/photo-1573957065303-110b23048d68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
  url: string;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.cocktail);
  }

  ngOnChanges(): void {
    this.getUrl();
  }

  getUrl() {
    if (this.cocktail) {
      this.url = this.cocktail.imageUrl;
    }
  }
}
