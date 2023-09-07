import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks';
import { tasks } from '../mock-tasks';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  today: number = Date.now();
  taskCount: number = tasks.length;
  selectedTask?: Tasks;
  role = 'admin';

  tasksArr: Tasks[] = [];

  onClick(task: Tasks): void {
    this.selectedTask = task;
  }

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.getTasks();
  }
  
  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasksArr = tasks;
    });
  }
}
