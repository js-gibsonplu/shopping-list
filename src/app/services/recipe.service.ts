import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Cookies From Home',
      'These cookies are bomb.com',
      'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/08/MM-Chocolate-Chip-Cookies-6.jpg?resize=500%2C500&ssl=1',
      'some chocolate chip cookies with M&Ms',
      'homeCookies'
    ),
    new Recipe(
      'Cookies From Far Away',
      'These cookies are great',
      'https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/08/MM-Chocolate-Chip-Cookies-6.jpg?resize=500%2C500&ssl=1',
      'some chocolate chip cookies with M&Ms',
      'farAwayCookies'
    )
  ];

  getRecipes() {
    // * This returns a copy of the recipes array
    return this.recipes.slice();
  }

  constructor() { }
}
