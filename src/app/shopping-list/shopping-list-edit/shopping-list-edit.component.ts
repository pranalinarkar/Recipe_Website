import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredients} from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() ingredientOutput = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddClicked(nameInput: HTMLInputElement, amountInput: HTMLInputElement)
  {
    console.log(nameInput.value);
    this.ingredientOutput.emit({'name' : nameInput.value, 'amount' : Number(amountInput.value)});
  }
}
