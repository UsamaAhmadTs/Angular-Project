import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tasks } from './tasks';
import { tasks } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTasks(): Observable<Tasks[]> {
    return of(tasks);
  }
}
