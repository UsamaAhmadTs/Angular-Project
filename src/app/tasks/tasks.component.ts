import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit, QueryList,
  ViewChild, ViewChildren
} from '@angular/core';
import {Tasks} from '../tasks';
import {tasks} from '../mock-tasks';
import {TaskService} from '../task.service'
import {TasksArrComponent} from "../tasks-arr/tasks-arr.component";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TasksComponent implements OnInit,AfterViewInit {


  @ViewChild(TasksArrComponent) tasksArrComponent!: TasksArrComponent;
  @ViewChild('taskTitle') taskTitle!: ElementRef;
  @ViewChildren(TasksArrComponent) tasksArrList!: QueryList<TasksArrComponent>;
  today: number = Date.now();
  taskCount: number = tasks.length;
  selectedTask?: Tasks;
  role = 'admin';

  tasksArr: Tasks[] = [];
  newTask: Tasks = { id: 0, title: '', description: '' }; // Initialize newTask
  onTaskSelected(task: Tasks) {
    this.selectedTask = task;
  }

  constructor(private cdr: ChangeDetectorRef,private taskService: TaskService) {}
  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasksArr = tasks;
    });
  }

  deleteTask(taskTitle: string): void {
    this.taskService.deleteTask(taskTitle);
    this.selectedTask = undefined; // Reset selected task after deletion
    this.getTasks(); // Update the tasks array after deletion
  }


  addTask(): void {
    this.taskService.addTask(this.newTask);
    this.newTask = { id: 0, title: '', description: '' }; // Reset newTask after adding
    this.getTasks();
  }

  ngAfterViewInit(): void {
    this.tasksArrComponent.taskTitle = 'New Title from Parent';
    this.tasksArrList.forEach(item => console.log(item));
  }
  onTitleChange() {
    if (this.selectedTask) {
      const newTitle = this.taskTitle.nativeElement.value;
      console.log('New Title:', newTitle);
      this.selectedTask.title = newTitle;
      this.taskService.updateTask(this.selectedTask);
      this.cdr.markForCheck();
    }
  }

}
