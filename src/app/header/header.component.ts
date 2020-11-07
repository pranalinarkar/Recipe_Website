import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerNameClicked = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  onShoppingListClick()
  {
    console.log('cliced');
    this.headerNameClicked.emit('SHOPPING_LIST');
  }

  onRecipesClick()
  {
    this.headerNameClicked.emit('RECIPES');
  }

}
