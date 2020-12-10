import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private recipeService : RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getter();
  }

  onNewRecipeClick()
  {
    this.router.navigate(['/recipes','new']);  
  }
}
