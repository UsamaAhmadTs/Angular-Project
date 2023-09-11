import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {tasks} from "./mock-tasks";
import {TasksComponent} from "./tasks/tasks.component";
import { localStorageToken } from "./localStorage.token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'my-angular-app';
  @ViewChild(TasksComponent)
  tasksComponent!: TasksComponent;
  constructor(@Inject(localStorageToken) private localStorage: any) {
  }
  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Angular Project')
  }

}
