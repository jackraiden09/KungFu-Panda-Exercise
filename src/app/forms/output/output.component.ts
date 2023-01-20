import { Component, Input, OnInit } from '@angular/core';
import { WorkoutOutput } from 'src/app/dbmodels/workout-output';
import { WeeklyPerformanceService } from 'src/app/services/weekly-performance.service';

@Component({
  selector: 'forms-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit{

  @Input() exerciseResult: WorkoutOutput[] = [];
  constructor(private workoutValue: WeeklyPerformanceService) {}
  
  ngOnInit(): void {
    console.log("ngOnit Fired!")

    this.workoutValue.getAll().subscribe((workoutData) => {
      this.exerciseResult = workoutData
    })
  }

}
