import { Routes } from '@angular/router';
import { mainRoutes } from './main.routes';



export const routes: Routes = [
  ...mainRoutes,


  { path: '**', redirectTo: '' }
];