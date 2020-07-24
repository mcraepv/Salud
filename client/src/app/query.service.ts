import { Test } from './models/test';
import { Cocktail } from './models/cocktail';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  ingredientURL = 'http://localhost:3000/api/ingredient';
  cocktailURL = 'http://localhost:3000/api/cocktail';
  testURL = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<Test[]> {
    return this.http.get<Test[]>(this.testURL);
  }
  //this is gonna mess it up so just don't lol
  // getIngredientByType(type) {
  //   this.http.get(this.ingredientURL, type).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
