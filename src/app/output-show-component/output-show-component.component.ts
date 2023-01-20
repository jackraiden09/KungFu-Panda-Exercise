import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutOutput } from '../dbmodels/workout-output';
import { WeeklyPerformanceService } from '../services/weekly-performance.service';

@Component({
  selector: 'app-output-show-component',
  templateUrl: './output-show-component.component.html',
  styleUrls: ['./output-show-component.component.scss']
})
export class OutputShowComponentComponent implements OnInit{
  id: number

  constructor(
    private route: ActivatedRoute,
    private exerciseSession: WeeklyPerformanceService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.id)

    this.exerciseSession.getById(this.id).subscribe((session) => {
      this.workoutSession = session
    })
  }

  workoutSession: WorkoutOutput = {
    exerciseType: '',
    date: '',
    startTimeResult: '',
    endTimeResult: '',
    caloriesBurnedResult: 0,
    caloriesBurnedGoalResult: 0,

  }



}
