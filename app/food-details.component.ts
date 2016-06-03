import { Component } from 'angular2/core';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';

@Component({
  selector: 'food-details',
  inputs: ['food'],
  directives: [EditFoodDetailsComponent],
  template: `
    <img class="medium-image" src="resources/images/food.gif">
    <h3 class="selected">{{ food.name }}</h3>
    <h3><span class="details-label">Description:</span> {{ food.description }}</h3>
    <h3><span class="details-label">Calories:</span> {{ food.calories }} </h3>
    <edit-food-details
      [food]="food">
    </edit-food-details>
  `
})
export class FoodDetailsComponent {
  public food: Food;
}
