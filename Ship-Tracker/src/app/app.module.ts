import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './features/components/map/map.component'; // Importe o MapComponent
import { VesselDataService } from './services/vessel.data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, // Componente principal
    MapComponent  // Certifique-se de que o MapComponent está declarado aqui
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [VesselDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}