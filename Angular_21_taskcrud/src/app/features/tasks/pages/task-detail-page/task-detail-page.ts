import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '@core/services/task.service';

@Component({
  selector: 'app-task-detail-page',
  imports: [RouterLink],
  templateUrl: './task-detail-page.html',
})
export class TaskDetailPage {
  private taskService = inject(TaskService);

  id = input.required<string>();

  task = computed(() =>
    this.taskService.allTasks().find((t) => t.id === Number(this.id()))
  );
}
