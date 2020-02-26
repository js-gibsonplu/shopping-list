import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { Ingredient } from '../../../shared-data/ingredient.model';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(ingredients: Ingredient) {
    console.log(ingredients);
    this.shoppingListService.importIngredientsFromRecipe(ingredients);
  }

}
