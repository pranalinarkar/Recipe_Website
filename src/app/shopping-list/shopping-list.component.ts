import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list.service';



@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit{
    ingredients: Ingredients[] =[];

    constructor(private shoppingListService: ShoppingListService)
    {}
    
    ngOnInit(){
        this.ingredients = this.shoppingListService.getter();
        this.shoppingListService.ingredientsChanged.subscribe(
            (ingredientsList: Ingredients[]) => {
                this.ingredients =ingredientsList;
            }
        )
    }

    //    onIngredientAddClicked(addedIngredient : Ingredients)
    // {
    //     console.log(addedIngredient);
    //     this.ingredients.push(addedIngredient);
    // }
}