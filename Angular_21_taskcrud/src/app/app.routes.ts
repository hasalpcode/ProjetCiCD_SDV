import { Routes } from '@angular/router';
import { TaskDetailPage } from '@features/tasks/pages/task-detail-page/task-detail-page';
import { TaskFormPage } from '@features/tasks/pages/task-form-page/task-form-page';
import { TaskListPage } from '@features/tasks/pages/task-list-page/task-list-page';

export const routes: Routes = [
    {path: '',redirectTo: 'tasks', pathMatch: 'full'},
    { path: 'tasks', component: TaskListPage },
    { path: 'tasks/new', component: TaskFormPage },
    { path: 'tasks/:id', component: TaskDetailPage },        
    { path: '**', redirectTo: 'tasks' },  
];
