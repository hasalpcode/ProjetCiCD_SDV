import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '@core/models/task.model';
import { TaskRepository } from '@core/repository/task.repository';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private taskRepository = inject(TaskRepository);

  //  private tasks = signal<Task[]>([
  //   { id: 1, title: 'Apprendre les Signals', description: 'signal, computed, effect', done: true,  priority: 'haute',   tags: ['angular', 'signals'] },
  //   { id: 2, title: 'Comprendre les services', description: 'Injection de dépendances', done: false, priority: 'moyenne', tags: ['angular', 'services'] },
  //   { id: 3, title: 'Créer TaskForm',          description: 'Ajouter des tâches',        done: false, priority: 'basse',   tags: ['pratique'] },
  // ]);
  private tasks = signal<Task[]>([]);

  readonly allTasks = this.tasks.asReadonly();

  readonly doneTasks = computed(() => this.tasks().filter(task => task.done).length);


  readonly pendingTasksCount = computed(()=> this.tasks().filter(t=> !t.done).length)

  getAllTasks() {
    this.taskRepository.getAll().subscribe({
      next: tasks => this.tasks.set(tasks),
      error: err => console.error('Erreur chargement:', err),
    });
  }
  toggleTaskDone(id: number) {
    this.taskRepository.toggle(id).subscribe({
      next: updated => this.tasks.update(list => list.map(t => t.id === id ? updated : t)),
      error: err => console.error('Erreur toggle:', err),
    });
  }

  addTask(request: { title: string; description: string; priority: string; tags: string[] }) {
     this.taskRepository.create(request).subscribe({
      next: created => this.tasks.update(list => [...list, created]),
      error: err => console.error('Erreur ajout:', err),
    });
  }

  removeTask(id: number) {
   this.taskRepository.delete(id).subscribe({
      next: () => this.tasks.update(list => list.filter(t => t.id !== id)),
      error: err => console.error('Erreur suppression:', err),
    });
  }


}
