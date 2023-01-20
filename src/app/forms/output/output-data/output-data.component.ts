import { Component, Input } from '@angular/core';
import { WorkoutOutput} from 'src/app/dbmodels/workout-output';

@Component({
  selector: 'app-output-data',
  templateUrl: './output-data.component.html',
  styleUrls: ['./output-data.component.scss']
})
export class OutputDataComponent {
  @Input() workoutData: WorkoutOutput;

  WorkoutOutput = [
    {
    id: 0,
    exerciseType: '',
    date: '',
    startTimeResult: '',
    endTimeResult: '',
    caloriesBurnedResult: null,
    caloriesBurnedGoalResult: null,
  }
];

  deleteAllRows() {
    this.WorkoutOutput.splice(0, this.WorkoutOutput.length)
  }

}
