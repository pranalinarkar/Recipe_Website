import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[ new Recipe('Ratatouille','Ratatouille is a French Provençal stewed vegetable dish','https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?output-format=auto&output-quality=auto'),
                       new Recipe('Butter Chicken','Aromatic golden chicken pieces in an incredible creamy curry sauce','https://static.toiimg.com/thumb/53205522.cms?imgsize=302803&width=800&height=800')];
  
  @Output() recipeClickedOutput = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(recipeClicked : Recipe)
  {
    this.recipeClickedOutput.emit(recipeClicked);
  }
}
