import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  template: `
    <h3 *ngFor="#currentFood of foodList"
     (click)="foodClicked(currentFood)"
     [class.selected]="currentFood === selectedFood">
      {{ currentFood.name }}
    </h3>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log(clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}

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
