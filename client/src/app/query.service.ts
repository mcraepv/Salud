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
  nutritionURL =
    'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=vhvEbrN6AYcz02VcLyMWAbIG6qhOQngRIPjqz5Ia&query=';

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

  getNutritionFacts(cocktailName: String): Observable<any[]> {
    return this.http.get<any[]>(`${this.nutritionURL}${cocktailName}`);
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
