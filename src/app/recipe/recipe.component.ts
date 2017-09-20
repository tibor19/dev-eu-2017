import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'] as number;
    this.recipeService.getRecipe(id).then(r => this.recipe = r);
  }

}
