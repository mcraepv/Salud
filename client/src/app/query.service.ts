import { Cocktail } from './models/cocktail';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from './ingredient';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Drink } from './drink';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  //FINAL QUERIES for heroku deploy
  //================================
  ingredientURL = 'api/ingredient';
  cocktailURL = 'api/results/';
  advancedSearchURL = 'api/advanced-search';
  randomURL = 'api/random';
  initAdvancedURL = 'api/cocktail';
  cocktailSearchURL = 'api/cocktail-search/';
  favoriteURL = 'api/favorite/';
  userFavoritesURL = 'api/favorites/';
  //==============================================

  nutritionURL =
    'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=vhvEbrN6AYcz02VcLyMWAbIG6qhOQngRIPjqz5Ia&query=';

  //TEST QUERIES
  //=========================================
  // ingredientURL = 'http://localhost:3000/api/ingredient';
  // cocktailURL = 'http://localhost:3000/api/results/';
  // advancedSearchURL = 'http://localhost:3000/api/advanced-search';
  // randomURL = 'http://localhost:3000/api/random';
  // initAdvancedURL = 'http://localhost:3000/api/cocktail';
  // cocktailSearchURL = 'http://localhost:3000/api/cocktail-search/';
  // favoriteURL = 'http://localhost:3000/api/favorite/';
  // userFavoritesURL = 'http://localhost:3000/api/favorites/';
  //=============================================================

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

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
    return this.http
      .get<Cocktail[]>(`${this.cocktailURL}${cocktailName}`)
      .pipe(tap((x) => {}));
  }

  getNutritionFacts(cocktailName: String): Observable<any> {
    return this.http.get<any[]>(`${this.nutritionURL}${cocktailName}`);
  }

  advancedSearch(searchArr: Array<number>): Observable<Drink[]> {
    const customURL = `${this.advancedSearchURL}/${searchArr.toString()}`;
    return this.http.get<any>(customURL).pipe(
      tap((x) => {}),
      catchError(this.handleError<Drink[]>('advancedSearch', []))
    );
  }

  initAdvanced(): Observable<Drink[]> {
    return this.http.get<any>(this.initAdvancedURL).pipe(
      tap((x) => {}),
      catchError(this.handleError<Drink[]>('advancedSearch', []))
    );
  }

  getRandom(): Observable<Drink[]> {
    return this.http.get<any>(this.randomURL).pipe(
      tap((x) => {}),
      catchError(this.handleError<Drink[]>('randomSearch', []))
    );
  }

  getFavorites(username: String): Observable<any> {
    return this.http.get<any>(`${this.userFavoritesURL}${username}`);
  }

  getLikely(term: string): Observable<Drink[]> {
    return this.http
      .get<any>(`${this.cocktailSearchURL}${term}`)
      .pipe(tap((x) => {}));
  }

  addFavorite(cocktailID: number, userID: number) {
    const reqObj = {
      userID: userID,
      cocktailID: cocktailID,
    };
    this.http.post<any>(this.favoriteURL, reqObj).subscribe((res) => {});
  }

  removeFavorite(cocktailID: number, userID: number) {
    const reqObj = {
      userID: userID,
      cocktailID: cocktailID,
    };

    return this.http
      .delete<any>(`${this.favoriteURL}${cocktailID},${userID}`)
      .subscribe((res) => {
        if (res) {
          return 'success';
        }
      });
  }
}
