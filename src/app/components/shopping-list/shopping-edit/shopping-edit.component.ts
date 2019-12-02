import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared-data/ingredient.model';

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

  @Output() ingAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  // TODO - reset input values on submit
  inputInfo() {
    console.log(`ngModel name value = ${this.nameInputValue}`);
    console.log(`ngModel input value = ${this.amountInputValue}`);
    const newIng = new Ingredient(this.nameInputValue, this.amountInputValue);
    this.ingAdded.emit(newIng);
    this.amountInputElement.nativeElement.value = '';
    this.amountInputElement.nativeElement.value = '';
  }
}
