import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  
  @Output() recipeClickedOutput = new EventEmitter<Recipe>();
  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getter();
  }

  // onRecipeClicked(recipeClicked : Recipe)
  // {
  //   this.recipeClickedOutput.emit(recipeClicked);
  // }
}
