import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { WorkoutOutput } from 'src/app/dbmodels/workout-output';

@Component({
  selector: 'forms-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  @Input() exerciseData: WorkoutOutput = {
    id: 0,
    exerciseType: '',
    date: '',
    startTimeResult: '',
    endTimeResult: '',
    caloriesBurnedResult: 0,
    caloriesBurnedGoalResult: 0
  }


  //only emit yung datamodel structure
  @Output() formEvent: EventEmitter<WorkoutOutput> = new EventEmitter<WorkoutOutput>()

  //this - instance of the class ie InputComponent
  //akong class na ito
  //emit this class from me
  btnClicked = () => {
    console.log("Button wash clicked!")

    // copying the actualy object into o
    let o = { ...this.exerciseData }
    console.log(this.exerciseData)

    //always emit the data going to the output form
    this.formEvent.emit(o)

  }


  @Output () formReset: EventEmitter<WorkoutOutput> = new EventEmitter<WorkoutOutput>()
  btnClear = () => {
    console.log("Form was cleared")
      this.exerciseData.id = 0,
      this.exerciseData.exerciseType = '',
      this.exerciseData.date = '',
      this.exerciseData.startTimeResult = '',
      this.exerciseData.endTimeResult = '',
      this.exerciseData.caloriesBurnedResult = 0,
      this.exerciseData.caloriesBurnedGoalResult = 0
  }


}
