import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipe(id: number): Promise<Recipe> {
    return this.http.get<Recipe>('/assets/data/recipe.json' /* Here will come the id */).toPromise();
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('/assets/data/recipies.json');
  }
}
