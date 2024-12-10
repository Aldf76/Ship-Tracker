import { Component } from '@angular/core';
import { MapComponent } from './features/components/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MapComponent], // Importações para o projeto.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}


/* 
Estou utilizando StandAlone Component...
O que isso quer dizer ?

-Componentes Tradicionais necessitam de um módulo próprio para serem declarados.
Os StandAlone podem existir por si só. Descartando a necessidade de um módulo para cada componente. 
Isso costuma facilitar a organização do projeto 

Quando usar ? 

-Componentes pequenos e isolados: Componentes que possuem uma funcionalidade específica 
e não interagem muito com outros componentes.

-Prototipação rápida: Componentes standalone são ideais para criar protótipos rapidamente, 
pois você pode criar e testar componentes de forma isolada.

-Componentes reutilizáveis: Componentes que você deseja reutilizar em diferentes 
partes da aplicação sem a necessidade de criar um módulo compartilhado.

Importando os módulos na aplicação aqui no app.component.ts, eles ficam disponíveis em toda a aplicação.

*/