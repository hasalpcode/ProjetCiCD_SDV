import { Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '@core/models/task.model';
import { TaskService } from '@core/services/task.service';
import { Badge } from '@shared/components/badge';

@Component({
  selector: 'app-task-card',
  imports: [Badge,RouterLink],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {


  // taskTitle = signal('Apprendre les composants Angular');
  // description = signal('Comprendre le binding et le flow de contrôle');
  // isDone = signal(true);
  // priority = signal('haute');
  // tags = signal(['angular', 'formation', 'urgent']);

  // tagsCount = computed(()=> this.tags().length);

  // toggleDone() {
  //   this.isDone.update(done => !done);
  // }

  // constructor() {

  //   effect(()=> {
  //     console.log(`Le statut de la tâche "${this.taskTitle()}" est : ${this.isDone() ? 'Terminée' : 'En cours'}`);
  //   })
  // }
  
  mytask = input.required<Task>();
  toggle = output<void>();

  onToggleClick() {
    this.toggle.emit();
  }
}
