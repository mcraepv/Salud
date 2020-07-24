import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}
  ingredientURL = 'http://localhost:3000/api/ingredient';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //this is gonna mess it up so just don't lol
  // getIngredientByType(type) {
  //   this.http.get(this.ingredientURL, type).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
