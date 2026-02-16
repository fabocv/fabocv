import { Routes } from '@angular/router';
import { NotFound404 } from './core/404/NotFound404';

// [scaffold] landing
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
    title: "./fabo.sh "
  },
  { path: '**',
    component: NotFound404,
    title: '404 | Lost in Space'
  },
];

