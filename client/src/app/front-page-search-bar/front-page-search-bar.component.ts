import { Component, OnInit } from '@angular/core';
import { HomeSearchService } from '../home-search.service';

@Component({
  selector: 'app-front-page-search-bar',
  templateUrl: './front-page-search-bar.component.html',
  styleUrls: ['./front-page-search-bar.component.css'],
})
export class FrontPageSearchBarComponent implements OnInit {
  constructor(public homeSearchService: HomeSearchService) {}

  ngOnInit(): void {}
}
