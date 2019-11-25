import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeThatWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() { }

  onSelectedRecipe(event, recipe: Recipe) {
    console.warn(`HELLO FROM RECIPE LIST ${event}`);
    this.recipeThatWasSelected.emit(recipe);
  }
}
