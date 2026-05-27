import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: Inicio },

  { path: 'productos', component: Productos },

  { path: 'registro', component: Registro },

  { path: '**', redirectTo: 'inicio' }
];