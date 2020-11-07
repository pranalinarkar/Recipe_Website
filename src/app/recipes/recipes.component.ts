import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipeComponent implements OnInit {

  recipeClicked : Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(recipe :Recipe)
  {
    this.recipeClicked  = recipe;
  }
}
