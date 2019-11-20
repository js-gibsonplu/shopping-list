import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';
  @Output() recipesPageActive: boolean;
  shoppingPageActive = false;

  onServerAdded(data) {
    // console.log(`This is from app-component: ${data}`);
    console.log(`the app-component says 12 + 12 =`, 12 + 12);
  }

  showShoppingPage() {
    this.shoppingPageActive = true;
  }
}
