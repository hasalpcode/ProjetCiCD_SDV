import { Component } from '@angular/core';
import { TaskList } from '@features/tasks/task-list/task-list';

@Component({
  selector: 'app-task-list-page',
  imports: [TaskList],
  template: '<app-task-list />',
})
export class TaskListPage {}
