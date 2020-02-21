import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared-data/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInputElement', { static: true }) nameInputElement: ElementRef;
  nameInputValue: string;

  @ViewChild('amountInputElement', { static: true }) amountInputElement: ElementRef;
  amountInputValue: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addNewIng() {
    const ing = new Ingredient(this.nameInputValue, this.amountInputValue);
    this.shoppingListService.onAddNewIngredient(ing);
  }

  removeIngredient(index) {
    this.shoppingListService.onRemoveIngredient(index);
  }

  removeAllIngredients() {
    console.log(`removing ALL ingredients`)
    this.shoppingListService.onRemoveALLIngredients();
  }
}
