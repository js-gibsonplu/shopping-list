import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../components/recipes/recipes.model';
import { Ingredient } from '../shared-data/ingredient.model'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Cookies From Home',
      'These cookies are bomb.com',
      'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/08/MM-Chocolate-Chip-Cookies-6.jpg?resize=500%2C500&ssl=1',
      'some chocolate chip cookies with M&Ms',
      'homeCookies', [new Ingredient('sugar', 12), new Ingredient('flour', 15)]
    ),
    new Recipe(
      'Cookies From Far Away',
      'These cookies are great',
      'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/08/MM-Chocolate-Chip-Cookies-6.jpg?resize=500%2C500&ssl=1',
      'some chocolate chip cookies with M&Ms',
      'farAwayCookies',[new Ingredient('meat', 78), new Ingredient('jam', 109)]
    )
  ];

  getRecipes() {
    // * This returns a copy of the recipes array
    return this.recipes.slice();
  }



  constructor() { }
}
