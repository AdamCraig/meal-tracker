import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodDisplayComponent],
  template: `
    <food-display *ngFor="#currentFood of foodList"
     (click)="foodClicked(currentFood)"
     [class.selected]="currentFood === selectedFood"
     [food]="currentFood">
      {{ currentFood.name }}
    </food-display>
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
    console.log(clickedFood.description);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}
