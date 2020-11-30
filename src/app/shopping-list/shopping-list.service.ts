import { EventEmitter } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model'

export class ShoppingListService{
    ingredients: Ingredients[] =[ new Ingredients('Capsicum', 5), new Ingredients('Tomatoes',10)];
    ingredientsChanged = new EventEmitter<Ingredients[]>();

    onIngredientAddClicked(addedIngredient : Ingredients)
    {
        console.log(addedIngredient);
        this.ingredients.push(addedIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getter(){
        return this.ingredients.slice();
    }

    addIngredientsToShoppingList(ingredientsArray: Ingredients[])
    {
        this.ingredients.push(...ingredientsArray);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }    
}