import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {

  @Input() totalCaloriesBurned: number = 0
  @Input() aveCaloriesBurned: number = 0  
  
}
