import { Injectable } from '@angular/core';
import { WorkoutOutput } from '../dbmodels/workout-output';

@Injectable({
  providedIn: 'root'
})
export class WeeklyPerformanceService {

  constructor() { }

  //caloriesBurned - name of variable
  totalCaloriesBurned = (caloriesBurned: WorkoutOutput[]):number => {
    let total = 0

    caloriesBurned.forEach((o: WorkoutOutput) => {
      total = total + o.caloriesBurnedResult
    })
    return total
  }

  aveCaloriesBurned = (aveCalories: WorkoutOutput[]): number => {
   let ave = 0

  aveCalories.forEach((x: WorkoutOutput) => {
    if(x.caloriesBurnedResult > ave) {
      ave = x.caloriesBurnedResult
    }
  })
   return ave
  }


}
