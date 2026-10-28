import { TestBed } from '@angular/core/testing';

import {  TaskService } from './task.service';
import { Task } from '@core/models/task.model';
import { of } from 'rxjs';
import { TaskRepository } from '@core/repository/task.repository';

describe('TaskService', () => {
  let service: TaskService;

   const fakeTasks: Task[] = [
    { id: 1, title: 'A', description: '', done: true,  priority: 'haute', tags: [] },
    { id: 2, title: 'B', description: '', done: false, priority: 'basse', tags: [] },
    { id: 3, title: 'C', description: '', done: true,  priority: 'basse', tags: [] },
  ];

  beforeEach(() => {
    // ON remplace le vrai repository par un faux pour les tests

    const mockRepo = {
      getAll: () =>  of(fakeTasks),
      toggle: (id: number) => of({ ...fakeTasks.find(t => t.id === id)!, done: !fakeTasks.find(t => t.id === id)!.done }),
      create: (request: { title: string; description: string; priority: string; tags: string[] }) => of({ id: 4, ...request, done: false }),
      delete: (id: number) => of(void 0),
    }

    TestBed.configureTestingModule({
      providers: [
        TaskService,
        { provide: TaskRepository, useValue: mockRepo }
      ]
    });
    service = TestBed.inject(TaskService);
  });

  it('devrait compter les taches terminées', () => {
    service.getAllTasks();  // charge les fausses données
    expect(service.doneTasks()).toBe(2); // 2 tâches ont done: true

  });

  it('devrait exposer toutes les taches', () => {
    service.getAllTasks();  // charge les fausses données
    expect(service.allTasks().length).toBe(3); // 3 tâches au total
  });

  it('devrait compter les taches non terminees', () => {
    service.getAllTasks(); 
    expect(service.pendingTasksCount()).toBe(1);
  });
});
