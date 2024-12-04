import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { VesselDataService } from '../../../services/vessel.data.service';


// Interface para as embarcações
interface Vessel {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  speed: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map!: L.Map; // Corrigido o erro de inicialização
  private markers: { [id: number]: L.Marker } = {};

  constructor(private vesselDataService: VesselDataService) {}

  ngOnInit(): void {
    this.initMap();
    this.vesselDataService.getVessels().subscribe((vessels: Vessel[]) => {
      vessels.forEach((vessel) => {
        if (this.markers[vessel.id]) {
          this.markers[vessel.id].setLatLng([vessel.latitude, vessel.longitude]);
        } else {
          this.markers[vessel.id] = this.createCustomMarker(vessel).addTo(this.map);
        }
      });
    });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [37.7749, -122.4194],
      zoom: 5,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
  }

  private createCustomMarker(vessel: Vessel): L.Marker {
    const icon = L.icon({
      iconUrl: '../../../../assets/ship-icon.png', // Caminho do ícone personalizado
      iconSize: [30, 30],
    });

    return L.marker([vessel.latitude, vessel.longitude], {
      icon,
      title: `${vessel.name} (Speed: ${vessel.speed} knots)`,
    });
  }
}
