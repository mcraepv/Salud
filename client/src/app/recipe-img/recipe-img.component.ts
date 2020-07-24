import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-img',
  templateUrl: './recipe-img.component.html',
  styleUrls: ['./recipe-img.component.css'],
})
export class RecipeImgComponent implements OnInit {
  itemImageUrl: string = 'https://via.placeholder.com/400x500ij';
  constructor() {}

  ngOnInit(): void {}
}
