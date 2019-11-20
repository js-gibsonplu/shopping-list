import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';
  @Output() recipesPageActive: boolean;
  displayFeature = 'recipes';


  showFeature(choice: string) {
    this.displayFeature = choice;
  }
}
