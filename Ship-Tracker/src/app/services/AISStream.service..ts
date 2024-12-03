import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class AISStreamService {
  private webSocket$!: WebSocketSubject<any>;

  connect(apiKey: string, bbox: any): WebSocketSubject<any> {
    const webSocketUrl = 'wss://localhost:4200/api/v0/stream';
    this.webSocket$ = webSocket(webSocketUrl);

    // Envia a assinatura após criar o WebSocket
    setTimeout(() => {
      this.webSocket$.next({
        apiKey,
        bbox,
      });
    }, 1000);

    return this.webSocket$;
  }

  disconnect(): void {
    if (this.webSocket$) {
      this.webSocket$.complete();
    }
  }
}


/*

Um serviço em Angular é uma classe responsável por encapsular funcionalidades que podem ser reutilizadas em diferentes componentes. 
No caso do AISStreamService, ele será responsável por gerenciar a conexão WebSocket, lidar com a emissão e recepção de mensagens,
 e fornecer uma interface para que outros componentes se inscrevam e recebam os dados.

*/