import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tasks } from './tasks';
import { tasks } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Tasks[] = tasks;
  getTasks(): Observable<Tasks[]> {
    return of(tasks);
  }
  addTask(newTask: Tasks): void {
    newTask.id = this.generateUniqueId();
    // this.tasks.push(newTask)
    this.tasks= [...this.tasks, newTask]
  }
  updateTask(updatedTask: Tasks): void {
    const existingTask = this.tasks.find(task => task.title === updatedTask.title);
    if (existingTask) {
      existingTask.title = updatedTask.title;
    }
  }

  private generateUniqueId(): number {
    const maxId = Math.max(...this.tasks.map(task => task.id), 0);
    return maxId + 1;
  }
}
