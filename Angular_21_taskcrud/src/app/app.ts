import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskCard } from './features/tasks/task-card/task-card';
import { TaskList } from '@features/tasks/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterLink ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('Mon Gestionnaire de Tâches');
}
