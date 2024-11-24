import { Component } from '@angular/core';
import { MapComponent } from './features/components/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent], // Importa o MapComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
