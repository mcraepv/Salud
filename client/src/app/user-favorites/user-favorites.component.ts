import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Drink } from '../drink';
import { QueryService } from '../query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.css'],
})
export class UserFavoritesComponent implements OnInit {
  constructor(private queryService: QueryService, private router: Router) {}

  results$: Observable<Drink[]>;
  isSuccessful: boolean = true;
  user: String = localStorage.getItem('email');

  ngOnInit(): void {
    // this.results$ = this.queryService.getFavorites(this.user);
    // this.results$.subscribe((x) => {
    //   console.log(x);
    //   if (!x.length) {
    //     this.isSuccessful = false;
    //   }
    // })
  }
}
