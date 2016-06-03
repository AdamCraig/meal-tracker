import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { FoodDetailsComponent } from './food-details.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodDisplayComponent, FoodDetailsComponent],
  template: `
    <div class="row">
      <div class="col-xs-6 food-list">
        <food-display *ngFor="#currentFood of foodList"
       (click)="foodClicked(currentFood)"
       [class.selected]="currentFood === selectedFood"
       [food]="currentFood">
        </food-display>
      </div>
      <div *ngIf="selectedFood" class="col-xs-6 food-details">
        <food-details
          [food]="selectedFood">
        </food-details>
      </div>
    </div>
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
