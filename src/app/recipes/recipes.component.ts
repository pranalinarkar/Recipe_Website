import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {

  recipeClicked : Recipe;
  
  constructor(private recipeService: RecipeService) {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => this.recipeClicked = recipe
    )
   }

  ngOnInit(): void {
  }

  // onRecipeClicked(recipe :Recipe)
  // {
  //   this.recipeClicked  = recipe;
  // }
}
