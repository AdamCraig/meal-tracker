import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker~</h1>
      <food-list
      [foodList]="foods"
      (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("A Totally Real And Not-Just-For-Testing Cheeseburger", "Definitely not a hologram.", 700),
      new Food("An Ice Cream Sundae Made of Nothing But Kitten Dreams", "For more testing purposes.", 12),
      new Food("A Mountain of Ghost-Chocolate", "Tastes like nothing.", 4),
      new Food("An Ice Cream Sundae Made of Nothing But Kitten Dreams", "For more testing purposes.", 12),
      new Food("An Ice Cream Sundae Made of Nothing But Kitten Dreams", "For more testing purposes.", 12)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
  }
}
