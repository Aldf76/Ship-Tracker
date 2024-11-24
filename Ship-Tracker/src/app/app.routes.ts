import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './features/components/map/map.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent }, // Página inicial
  { path: 'map', component: MapComponent } // Rota para o mapa
];
