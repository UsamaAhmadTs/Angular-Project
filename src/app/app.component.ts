import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {tasks} from "./mock-tasks";
import {TasksComponent} from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{
  title = 'my-angular-app';
  @ViewChild(TasksComponent)
  tasksComponent!: TasksComponent;
  ngAfterViewInit() {
  }

}
