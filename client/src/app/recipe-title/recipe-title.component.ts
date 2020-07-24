import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.css'],
})
export class RecipeTitleComponent implements OnInit {
  title: string = 'Margarita';
  constructor() {}

  ngOnInit(): void {}
}
