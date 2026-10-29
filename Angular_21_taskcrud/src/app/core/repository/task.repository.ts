import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Task } from "@core/models/task.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TaskRepository {
  private http = inject(HttpClient);
  private readonly apiUrl = '/api/todos';

   getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  create(request: { title: string; description: string; priority: string; tags: string[]; done: boolean }): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, request);
  }

  toggle(id: number): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}/toggle`, {});
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}