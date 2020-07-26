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
  cocktailURL = 'http://localhost:3000/recipe/';
  advancedSearchURL = 'http://localhost:3000/api/advanced-search';
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

  getCocktail(cocktailName: String): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(`${this.cocktailURL}${cocktailName}`);
  }

  advancedSearch(searchArr: Array<number>): Observable<Drink[]> {
    console.log('query');
    const customURL = `${this.advancedSearchURL}/${searchArr.toString()}`;
    return this.http.get<any>(customURL).pipe(
      tap((x) => {
        x.length
          ? console.log('Found drinks')
          : console.log("didn't find drinks");
      }),
      catchError(this.handleError<Drink[]>('advancedSearch', []))
    );
  }
}
