import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './features/components/map/map.component'; // Importe o MapComponent

@NgModule({
  declarations: [
    AppComponent, // Componente principal
    MapComponent  // Certifique-se de que o MapComponent está declarado aqui
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}