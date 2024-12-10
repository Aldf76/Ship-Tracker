import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { VesselDataService } from '../../../services/vessel.data.service';

// Interface para representar dados de embarcações
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
export class MapComponent implements AfterViewInit {
  private map!: L.Map; // Variável para o mapa Leaflet
  private markers: { [id: number]: L.Marker } = {}; // Marcadores organizados por ID

  constructor(private vesselDataService: VesselDataService) {}

  // Método executado após a inicialização do componente
  ngAfterViewInit(): void {
    this.initMap(); // Inicializa o mapa
    this.subscribeToVessels(); // Assina o serviço de dados de embarcações
  }

  // Inicializa o mapa Leaflet
  private initMap(): void {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.error('Contêiner do mapa (#map) não encontrado!');
      return;
    }

    this.map = L.map('map', {
      center: [37.7749, -122.4194], // Coordenadas iniciais (São Francisco)
      zoom: 5, // Nível de zoom inicial
    });

    // Adiciona tiles do OpenStreetMap ao mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    // Corrige o tamanho do mapa após inicializar
    setTimeout(() => {
      this.map.invalidateSize();
    }, 100);
  }

  // Assina o serviço para receber dados das embarcações
  private subscribeToVessels(): void {
    this.vesselDataService.getVessels().subscribe((vessels: Vessel[]) => {
      vessels.forEach((vessel) => {
        if (this.markers[vessel.id]) {
          // Atualiza posição do marcador se ele já existe
          this.markers[vessel.id].setLatLng([vessel.latitude, vessel.longitude]);
        } else {
          // Cria um novo marcador caso não exista
          this.markers[vessel.id] = this.createCustomMarker(vessel).addTo(this.map);
        }
      });
    });
  }

  // Cria um marcador personalizado
  private createCustomMarker(vessel: Vessel): L.Marker {
    const icon = L.icon({
      iconUrl: 'https://img.icons8.com/?size=100&id=10399&format=png&color=000000',
      iconSize: [20, 20], // Tamanho do ícone
    });

    return L.marker([vessel.latitude, vessel.longitude], {
      icon,
      title: `${vessel.name} (Speed: ${vessel.speed} knots)`, // Tooltip do marcador
    });
  }
}
