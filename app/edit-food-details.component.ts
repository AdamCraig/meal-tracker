import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <h2>Edit This Food Log:</h2>
    <input [(ngModel)]="food.name" class="input-lg edit-food-form"/>
    <br>
    <input [(ngModel)]="food.description" class="input-lg edit-food-form"/>
    <br>
    <input [(ngModel)]="food.calories" class="input-lg edit-food-form" type="number" min=0/>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
