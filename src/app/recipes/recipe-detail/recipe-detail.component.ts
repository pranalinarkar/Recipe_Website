import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeInput : Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  OnToShoppingListClicked()
  {
    this.recipeService.addIngredientsToShoppingList(this.recipeInput.ingredients);
  }

}
