import { Routes } from '@angular/router';

// [scaffold] landing
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',  // Redirección corregida a '/home'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  },
];

// [scaffold] landing entries
// Add these entries into 'routes' array for simple landing setup:
// { path: '', pathMatch: 'full', redirectTo: 'home' },
// { path: 'home', loadComponent: () => import('./features/home/home.page').then(m => m.HomePage) },
