import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../app/shared-data/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
  ];

  addNewIng(ingredient) {
    this.shoppingListService.onAddNewIngredient(ingredient);
  }
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
  }

}
