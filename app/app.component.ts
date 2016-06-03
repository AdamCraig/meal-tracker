import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker~</h1>
      <h3 *ngFor="#food of foods" (click)="foodWasSelected(food)">
        {{ food.name }}
      </h3>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("A Totally Real And Not-Just-For-Testing Cheeseburger", "Definitely not a hologram.", 700),
      new Food("An Ice Cream Sundae Made of Nothing But Kitten Dreams", "For more testing purposes.", 12),
      new Food("A Mountain of Ghost-Chocolate", "Tastes like nothing.", 4)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log(clickedFood.name);
  }
}

export class Food {
  constructor(public name: string, public description: string, public calories: number) {

  }
}
