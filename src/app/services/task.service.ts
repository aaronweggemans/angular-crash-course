import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

/**
 * Gets all the CRUD actions for the Tasks
 */
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  // RETRIEVES ALL TASKS
  getTasks(): Observable<Task[]> { 
    return this.http.get<Task[]>(this.apiUrl)
  }

  // REMOVES A TASK 
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }
}
