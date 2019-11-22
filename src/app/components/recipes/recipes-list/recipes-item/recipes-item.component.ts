import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() showRecipeInDetail = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  loadRecipeIntoDetail(event) {
    console.log(`Recipe Clicked in RECIPE ITEM ${event}`);
  }

}
