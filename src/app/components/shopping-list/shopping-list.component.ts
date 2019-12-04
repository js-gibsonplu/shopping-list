import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../app/shared-data/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
  ];

  addNewIng(ingredient) {
    this.ingredients.push(ingredient);
  }
  constructor() { }

  ngOnInit() {
  }

}
