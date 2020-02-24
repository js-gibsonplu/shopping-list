import { Component, OnInit, DoCheck } from '@angular/core';
import { Ingredient } from '../../../app/shared-data/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, DoCheck {
  ingredients: Ingredient[] = [
  ];

  constructor(private shoppingListService: ShoppingListService) { };

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

  }

  ngDoCheck() {
    console.log(this.ingredients);
  }


}
