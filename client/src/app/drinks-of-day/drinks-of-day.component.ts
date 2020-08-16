import { Component, OnInit } from '@angular/core'; 
import { Observable } from 'rxjs';
import { Drink } from '../drink';
import { QueryService } from '../query.service';
import { HomeSearchService } from '../home-search.service';

@Component({
  selector: 'app-drinks-of-day',
  templateUrl: './drinks-of-day.component.html',
  styleUrls: ['./drinks-of-day.component.css'],
})
export class DrinksOfDayComponent implements OnInit {
  constructor(
    private queryService: QueryService,
    public homeSearchService: HomeSearchService
  ) {}

  results$: Observable<Drink[]>;
  observer = new IntersectionObserver(this.onIntersection);
  imagesToLoad = document.querySelectorAll('img[data-src]');

  onIntersection(imageEntities): void {
    imageEntities.forEach((image) => {
      if (image.isIntersecting) {
        this.observer.unobserve(image.target);
        image.target.src = image.target.dataset.src;
      }
    });
  }

  ngOnInit(): void {
    this.results$ = this.queryService.getRandom();
    this.imagesToLoad.forEach((image) => {
      this.observer.observe(image);
    });
  }
}
