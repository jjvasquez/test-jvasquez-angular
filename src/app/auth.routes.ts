import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  { path: 'login', loadComponent: () => import('./features/authorization/infrastructure/ui/login/login.component').then(m => m.LoginComponent) },
  { path: 'sucursales', loadComponent: () => import('./features/authorization/infrastructure/ui/business-unit-selector/business-unit-selector.component').then(m => m.BusinessUnitSelectorComponent) }
];
