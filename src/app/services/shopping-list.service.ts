import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared-data/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [

  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onRemoveIngredient(index: number) {
    this.ingredients.slice(index, 1);
  }

  onRemoveALLIngredients() {
    this.ingredients = [];
  }
}
