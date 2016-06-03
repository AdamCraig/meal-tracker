import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-details',
  inputs: ['food'],
  template: `
    <img class="medium-image" src="resources/images/food.png">
    <h3><span class="details-label">Food:</span> {{ food.name }}</h3>
    <h3><span class="details-label">Description:</span> {{ food.description }}</h3>
    <h3><span class="details-label">Calories:</span> {{ food.calories }} </h3>
  `
})
export class FoodDetailsComponent {
  public food: Food;
}
