import { Injectable } from '@angular/core';
import { Ingredient } from '../shared-data/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient(`apples`, 12),
    new Ingredient('bacon', 500)
  ];

  constructor() { }

  onAddNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
