import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Task} from './task';

import {environment} from "../environments/environments";

import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

import {Constants} from "./constants";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private http: HttpClient) {
    }

    isLoggedIn: boolean = false;

    Login(email: string, password: string) {
        if (email === Constants.EMAIL && password === Constants.PASSWORD) {
            this.isLoggedIn = true;
        }
        return this.isLoggedIn;
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(`${environment.mockTasks}`);
    }

    searchTasks(term: string): Observable<Task[]> {
        const options = term ?
            {params: new HttpParams().set('name', term)} : {};
        return this.http.get<Task[]>((`${environment.mockTasks}`), options)
    }

    addTask(newTask: Task): Observable<Task> {
        return this.http.post<Task>(`${environment.mockTasks}`, newTask, httpOptions)
    }

    deleteTask(taskId: number): Observable<Task> {
        return this.http.delete<Task>(`${environment.mockTasks}/${taskId}`, httpOptions);
    }

}
