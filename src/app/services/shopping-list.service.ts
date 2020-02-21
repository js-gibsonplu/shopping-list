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

  onRemoveIngredient(index: number) {
    this.ingredients.slice(index, 1);
  }

  onRemoveALLIngredients() {
    this.ingredients = [];
  }
}
