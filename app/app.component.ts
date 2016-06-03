import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>A Very Odd Meal Tracker</h1>
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
      new Food("An Ice Cream Sundae Made of Nothing But Kitten Dreams", "You felt moderately guilty eating it.", 600),
      new Food("A Mountain of Ghost-Chocolate", "Tastes like nothing.", 2),
      new Food("A Taco Constantly Phasing In And Out Of This Dimension", "It's both here and not here simultaneously.", 550),
      new Food("A Salad Made of Air", "Super healthy. It doesn't really feel like you ate anything, though.", 3)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
  }
}
