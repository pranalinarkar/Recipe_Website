import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';



@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent{
    ingredients: Ingredients[] =[ new Ingredients('Capsicum', 5), new Ingredients('Tomatoes',10)];

    onIngredientAddClicked(addedIngredient : Ingredients)
    {
        console.log(addedIngredient);
        this.ingredients.push(addedIngredient);
    }
}