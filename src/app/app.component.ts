import { Component } from '@angular/core';

import { WorkoutOutput } from './dbmodels/workout-output';
import { WeeklyPerformanceService } from './services/weekly-performance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workout-application';


  constructor (private weeklyPerformanceService: WeeklyPerformanceService ) {

  }
 
  exerciseData: WorkoutOutput[] = [];
  totalCaloriesBurned: number = 0
  aveCalories: number = 0



  //() - function
  //test muna kung gumagana bago mag populate ng code
  formEventHandler = (payload: WorkoutOutput) => {
    console.log("Handling FormEventHandler...")
    console.log(payload)
    this.exerciseData.push({...payload})
    this.totalCaloriesBurned = this.weeklyPerformanceService.totalCaloriesBurned(this.exerciseData)
    this.aveCalories = this.weeklyPerformanceService.aveCaloriesBurned(this.exerciseData)
  }


}
