import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInputElement', { static: true }) nameInputElement: ElementRef;
  nameInputValue: string;

  @ViewChild('amountInputElement', { static: true }) amountInputElement: ElementRef;
  amountInputValue: string;

  constructor() { }

  ngOnInit() {
  }

  // TODO - get this info to create a new list item in shopping list 
  inputInfo() {
    console.log(`ngModel name value = ${this.nameInputValue}`);
    console.log(`ngModel input value = ${this.amountInputValue}`);
  }
}
