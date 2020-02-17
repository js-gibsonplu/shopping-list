import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService, RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeThatWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() { 
    this.recipes = this.recipeService.getRecipes();
  }

  onSelectedRecipe(event, recipe: Recipe) {
    console.warn(`HELLO FROM RECIPE LIST ${event}`);
    this.recipeThatWasSelected.emit(recipe);
  }
}
