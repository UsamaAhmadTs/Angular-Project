import {Component, Inject, OnInit, ViewChild} from '@angular/core';

import {TasksComponent} from "./tasks/tasks.component";

import {localStorageToken} from "./localStorage.token";

import {Constants} from './constants';

interface LocalStorage {
  setItem(key: string, value: any): void;

  getItem(key: string): any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild(TasksComponent) tasksComponent!: TasksComponent;

  constructor(@Inject(localStorageToken) private localStorage: LocalStorage) {
  }

  ngOnInit(): void {
    this.localStorage.setItem('name', Constants.APP_NAME)
  }
}
