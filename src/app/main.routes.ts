import { Routes } from '@angular/router';
import { LayoutComponent } from './theme/layouts/layout.component';


export const mainRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
   
    children: [
      { path: '', loadComponent: () => import('./features/work-orders/infrastructure/ui/word-orders/word-orders.component').then(c => c.WordOrdersComponent) },
       
    ]
  }
];
