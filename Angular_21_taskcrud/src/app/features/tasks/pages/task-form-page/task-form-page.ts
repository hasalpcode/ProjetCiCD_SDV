import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '@core/services/task.service';

@Component({
  selector: 'app-task-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-page.html',
  styleUrl: './task-form-page.css',
})
export class TaskFormPage {
  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);
  private router = inject(Router);


  taskForm = this.fb.group({
    title: ['',[Validators.required, Validators.minLength(3)]],
    description: [''],
    priority: ['moyenne', Validators.required],
    tags: [''],
  });

  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched(); // affiche les erreurs de validation si le formulaire est invalide
      return;
    }

    const value = this.taskForm.getRawValue();

    const request = {
      title: value.title!,
      description: value.description!,
      priority: value.priority!,
      tags: value.tags ? value.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : [],
      done: false,
    };

    this.taskService.addTask(request);

    this.router.navigate(['/tasks']);
  }
}
