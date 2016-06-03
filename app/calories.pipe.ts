import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], args) {
    var caloriesThreshold = 500;
    var desiredFoodCalories = args[0];
    if (desiredFoodCalories === "healthy") {
      return input.filter(function(food) {
        return food.calories < caloriesThreshold;
      });
    } else if (desiredFoodCalories === "not-healthy") {
      return input.filter(function(food) {
        return food.calories >= caloriesThreshold;
      });
    } else {
      return input;
    }
  }
}
