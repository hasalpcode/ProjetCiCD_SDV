import { Component, inject, OnInit, signal } from '@angular/core';
import { Task } from '@core/models/task.model';
import { TaskCard } from '../task-card/task-card';
import { TaskService } from '@core/services/task.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit {

    private taskService = inject(TaskService);

    
  tasks = this.taskService.allTasks;
  doneCount = this.taskService.doneTasks;

  ngOnInit() {
    this.taskService.getAllTasks();
  }
  onToggleDone(taskId: number) {
    this.taskService.toggleTaskDone(taskId);
  }

  onRemoveTask(taskId: number) {
    this.taskService.removeTask(taskId);
  }
}
