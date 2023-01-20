import { Component, Input } from '@angular/core';
import { WorkoutOutput } from 'src/app/dbmodels/workout-output';

@Component({
  selector: 'forms-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Input() exerciseResult: WorkoutOutput[] = [];
}
