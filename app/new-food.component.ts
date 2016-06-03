import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="food-form">
      <h3>Just eat something? Add it here!</h3>
      <input placeholder="Food Name" class="input-lg" #newFoodName required>
      <input placeholder="Description" class="input-lg" #newFoodDescription required>
      <input placeholder="Calories" type="number" class="input-lg" #newFoodCalories required>
      <br>
      <button (click)="addFood(newFoodName, newFoodDescription, newFoodCalories)" class="btn-info btn-lg add-button">Send Me To Food Tracking Land</button>
    </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userFoodName: HTMLInputElement, userFoodDescription: HTMLInputElement, userFoodCalories: HTMLInputElement){

    var newFood = new Food(userFoodName.value, userFoodDescription.value, parseInt(userFoodCalories.value));
    this.onSubmitNewFood.emit(newFood);
    userFoodName.value = "";
    userFoodDescription.value = "";
    userFoodCalories.value = "";
  }
}
