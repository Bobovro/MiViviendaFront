import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./component/auth/login/login').then(m => m.Login),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./component/auth/register/register').then(m => m.Register),
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./component/home/home').then(m => m.Home),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];
