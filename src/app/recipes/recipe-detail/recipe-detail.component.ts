import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeInput : Recipe;
  id: number;
  
  constructor(private recipeService: RecipeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe
    (
      (params: Params) =>
      {
        this.id = params['id'];
        this.recipeInput = this.recipeService.getRecipeById(+params['id']);
      }
    )
  }

  OnToShoppingListClicked()
  {
    this.recipeService.addIngredientsToShoppingList(this.recipeInput.ingredients);
  }

}
