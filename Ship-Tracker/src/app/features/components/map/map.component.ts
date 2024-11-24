//o que seria o OnInit ?

/*

import { Component, OnInit } from '@angular/core';

// Importa classes do OpenLayers

import Map from 'ol/Map'; //Map: A classe principal para inicializar o mapa.
import View from 'ol/View'; // iew: Controla a visão inicial (posição e zoom) do mapa.
import TileLayer from 'ol/layer/Tile'; //TileLayer: Uma camada de mapa com tiles (como OpenStreetMap)
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-map',
  //perguntar sobre essa linha
  //imports: [], 
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {

map!: Map;

constructor() {} // é usado para iniciar o component
// Esse método é chamado quando o componente é carregado na tela.
ngOnInit(): void {
  this.map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
    source: new OSM()// camada de mapa do OpenStreetMap ( também pesquisar)
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2 // nível de zoom inicial
  })
  })



}

}
*/

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Map from 'ol/Map'; // Classe para criar o mapa
import TileLayer from 'ol/layer/Tile'; // Camada de blocos
import OSM from 'ol/source/OSM'; // Fonte de blocos (OpenStreetMap)
import View from 'ol/View'; // Gerencia a visualização do mapa

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef; // Referência ao container do mapa
  map!: Map; // Instância do mapa

  ngOnInit(): void {
    this.initializeMap(); // Inicializa o mapa ao carregar o componente
  }

  initializeMap(): void {
    // Inicializa o mapa usando o OpenLayers
    this.map = new Map({
      target: this.mapContainer.nativeElement, // Define o container HTML para o mapa
      layers: [
        new TileLayer({
          source: new OSM() // Usa os blocos do OpenStreetMap como camada base
        })
      ],
      view: new View({
        center: [0, 0], // Coordenadas iniciais (longitude, latitude em EPSG:3857)
        zoom: 2 // Nível de zoom inicial
      })
    });
  }
}

