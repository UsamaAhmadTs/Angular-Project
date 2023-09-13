import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren
} from '@angular/core';

import {Task} from '../task';

import {TaskService} from '../task.service'

import {TaskArrayComponent} from "../taskArray/taskArray.component";

import {HttpClient} from "@angular/common/http";

import {Constants} from '../constants';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class TasksComponent implements OnInit {

    @ViewChild(TaskArrayComponent) tasksArrComponent!: TaskArrayComponent;
    @ViewChild('taskTitle') taskTitle!: ElementRef;
    @ViewChildren(TaskArrayComponent) tasksArrList!: QueryList<TaskArrayComponent>;

    today: number = Constants.TODAY;
    selectedTask?: Task;
    editTask: Task | undefined;
    taskCount: number = 0;
    searchTerm: string = '';
    role = Constants.ROLE_ADMIN;
    tasksArray: Task[] = [];
    newTask: Task = {id: 0, title: '', description: ''};

    onTaskSelected(task: Task) {
        this.selectedTask = task;
    }

    constructor(private taskService: TaskService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getTasks();
    }

    getTasks(): void {
        this.taskService.getTasks().subscribe((tasks) => {
            this.tasksArray = tasks;
        });
    }

    deleteTask(taskId: number): void {
        this.taskService.deleteTask(taskId).subscribe(() => {
            this.tasksArray = this.tasksArray.filter(task => task.id !== taskId);
            this.selectedTask = undefined;
        });
        this.getTasks();
    }

    searchTasks(): void {
        if (this.searchTerm) {
            this.taskService.searchTasks(this.searchTerm).subscribe(tasks => {
                this.tasksArray = tasks;
            });
        }else {
            this.getTasks();
        }
    }

    addTask(): void {
        this.editTask = undefined;
        const newTask: Task = {
            id: 0,
            title: this.newTask.title,
            description: this.newTask.description
        };
        this.taskService
            .addTask(newTask)
            .subscribe(task => this.tasksArray = [...this.tasksArray, task]);
    }

}
