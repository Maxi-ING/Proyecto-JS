import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Registro } from './pages/registro/registro';
import { Estudiante } from './pages/estudiante/estudiante';
import { CalculopesoPage } from './pages/calculopeso/calculopeso';


export const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'inicio', component: Inicio },

  { path: 'productos', component: Productos },

  { path: 'registro', component: Registro },

  { path: 'estudiante', component: Estudiante },

  { path: 'calculopeso', component: CalculopesoPage },

  { path: '**', redirectTo: 'inicio' }

];