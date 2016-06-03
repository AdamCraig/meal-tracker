import { Component, EventEmitter } from 'angular2/core';
import { FoodDisplayComponent } from './food-display.component';
import { FoodDetailsComponent } from './food-details.component';
import { NewFoodComponent } from './new-food.component';
import { Food } from './food.model';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CaloriesPipe],
  directives: [FoodDisplayComponent, FoodDetailsComponent, NewFoodComponent],
  template: `
    <div class="row">
      <div class="col-xs-6 food-list">
        <select (change)="onChange($event.target.value)">
            <option value="all" selected="selected">Show All</option>
            <option value="healthy">Show "Healthy" Entries</option>
            <option value="not-healthy">Show Entries "That Taste Good"</option>
        </select>
        <food-display *ngFor="#currentFood of foodList | calories:filterCalories"
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
    <div class="row">
      <new-food (onSubmitNewFood)="createFood($event)"></new-food>
    </div>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalories: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log(clickedFood.description);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food): void {
    this.foodList.push(newFood);
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
