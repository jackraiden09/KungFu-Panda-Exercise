import { Injectable } from '@angular/core';
import { WorkoutOutput } from '../dbmodels/workout-output';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

//pwede sa ibang component e
// top level
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class WeeklyPerformanceService {

  baseUrl: string = 'http://localhost:5000'
  constructor(private http: HttpClient) { }

  getAll = (): Observable<WorkoutOutput[]> => {
    let exercise: Observable<WorkoutOutput[]> 
    exercise = this.http.get<WorkoutOutput[]>(`${this.baseUrl}/exercise_sessions`, httpOptions)

    return exercise
  }

  getById = (id : number) : Observable<WorkoutOutput> => {
    let exercise_id : Observable<WorkoutOutput>

    exercise_id = this.http.get<WorkoutOutput>(`${this.baseUrl}/exercise_sessions/${id}`, httpOptions)
    return exercise_id
  }


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
