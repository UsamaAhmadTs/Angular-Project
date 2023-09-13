import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Task} from './task';

import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

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
    private apiUrl = 'http://localhost:3005';

    constructor(private http: HttpClient) {
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
    }

    searchTasks(term: string): Observable<Task[]> {
        const options = term ?
            {params: new HttpParams().set('name', term)} : {};
        return this.http.get<Task[]>((`${this.apiUrl}/tasks`), options)
    }

    addTask(newTask: Task): Observable<Task> {
        return this.http.post<Task>(`${this.apiUrl}/tasks`, newTask, httpOptions)
    }

    deleteTask(taskId: number): Observable<Task> {
        return this.http.delete<Task>(`${this.apiUrl}/tasks/${taskId}`, httpOptions);
    }

}
