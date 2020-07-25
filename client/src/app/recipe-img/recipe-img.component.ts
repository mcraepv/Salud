import { QueryService } from './../query.service';
import { Cocktail } from './../models/cocktail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-img',
  templateUrl: './recipe-img.component.html',
  styleUrls: ['./recipe-img.component.css'],
})
export class RecipeImgComponent implements OnInit {
  @Input() cocktail: Cocktail;
  itemImageUrl: string = 'https://via.placeholder.com/400x500ij';
  constructor(private queryService: QueryService) {}

  ngOnInit(): void {
    // console.log(this.cocktail);
  }
}
