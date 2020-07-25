import { Test } from './models/test';
import { Cocktail } from './models/cocktail';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from './ingredient';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Drink } from './drink';

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

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.ingredientURL).pipe(
      tap((x) => {}),
      catchError(this.handleError<Ingredient[]>('getIngredients', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  advancedSearch(searchArr: Array<string>): Observable<Drink[]> {
    console.log('query');
    const customURL = `${this.cocktailURL}/?:${searchArr.toString()}`;
    return this.http.get<Drink[]>(customURL).pipe(
      tap((x) => {
        x.length
          ? console.log('Found drinks')
          : console.log("didn't find drinks");
      }),
      catchError(this.handleError<Drink[]>('advancedSearch', []))
    );
  }

  getCocktails(): Observable<Test[]> {
    return this.http.get<Test[]>(this.testURL);
  }
}
