import { Routes } from '@angular/router';

// [scaffold] landing
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects',  // Redirección corregida a '/home'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  },
];

