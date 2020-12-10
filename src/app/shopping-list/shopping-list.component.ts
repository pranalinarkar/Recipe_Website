import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import {ShoppingListService} from './shopping-list.service';



@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
    ingredients: Ingredients[] =[];
    igChanged: Subscription;

    constructor(private shoppingListService: ShoppingListService)
    {}
    
    ngOnInit(){
        this.ingredients = this.shoppingListService.getter();
        this.igChanged = this.shoppingListService.ingredientsChanged.subscribe(
            (ingredientsList: Ingredients[]) => {
                this.ingredients =ingredientsList;
            }
        )
    }

    ngOnDestroy()
    {
        this.igChanged.unsubscribe();
    }

    //    onIngredientAddClicked(addedIngredient : Ingredients)
    // {
    //     console.log(addedIngredient);
    //     this.ingredients.push(addedIngredient);
    // }
}