import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((mod) => mod.HomeComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/new/new.component').then((mod) => mod.NewComponent)
  },
  {
    path: 'edit',
    loadComponent: () => import('./pages/edit/edit.component').then((mod) => mod.EditComponent)
  },
];
