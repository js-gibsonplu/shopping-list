import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../app/shared-data/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('bacon', 4),
    new Ingredient('ham', 2),
    new Ingredient('cheese', 1)
  ];

  addNewIng(ingredient) {
    this.ingredients.push(ingredient);
  }
  constructor() { }

  ngOnInit() {
  }

}
