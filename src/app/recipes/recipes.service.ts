import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipeService
{
    recipes: Recipe[] =[ new Recipe('Ratatouille',
    'Ratatouille is a French Provençal stewed vegetable dish',
    'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?output-format=auto&output-quality=auto',
    [ new Ingredients('Brinjal',2),
      new Ingredients('Cilantro', 10)]),
    new Recipe('Butter Chicken',
    'Aromatic golden chicken pieces in an incredible creamy curry sauce',
    'https://static.toiimg.com/thumb/53205522.cms?imgsize=302803&width=800&height=800',
    [ new Ingredients('Meat',2),
    new Ingredients('Butter', 10)])];

    recipeSelected = new EventEmitter<Recipe> ();    
    
    constructor(private shoppingListService: ShoppingListService){}

getter()
{
    return this.recipes.slice();
}
    addIngredientsToShoppingList(ingredientsArray: Ingredients[])
    {
        this.shoppingListService.addIngredientsToShoppingList(ingredientsArray);
    }

    getRecipeById(id: number)
    {
        return this.recipes[id];
    }

}