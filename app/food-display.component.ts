import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div class="food-box">
      <h3>{{ food.name }}</h3>
    </div>
  `
})
export class FoodDisplayComponent {
  public food: Food;
}
