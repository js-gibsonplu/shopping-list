import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<any>();
  @Output() recipesPageActive = new EventEmitter<any>();
  @Output() shoppingPageActive = new EventEmitter<any>();

  collapsed = true;
  constructor() {}

  @ViewChild('testButton', { static: true }) testButton: ElementRef;

  ngOnInit() {
  }

  onActivateRecipes() {
    this.recipesPageActive.emit();
  }

  onActivateShopping() {
    this.shoppingPageActive.emit();
  }

  onAddServer() {
    // this.serverCreated.emit();
    // console.log(`this is from header: ${data}`);
    console.log(this.testButton.nativeElement.value);
  }
}
