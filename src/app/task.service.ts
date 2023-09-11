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
       this.tasks.push(newTask)
    // this.tasks = [...this.tasks, newTask]
  }
  deleteTask(taskTitle: string): void {
    const index = this.tasks.findIndex(task => task.title === taskTitle);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
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
