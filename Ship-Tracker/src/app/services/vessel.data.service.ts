//Essa página está projetada para fornecer os dados inventados e atualizar de tempo em tempo.
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { MOCK_VESSELS } from '../mocks/mock.vessels';

@Injectable({
  providedIn: 'root',
})
export class VesselDataService {
  private vessels$ = new BehaviorSubject(MOCK_VESSELS);

  constructor() {
    this.simulateDataUpdates();
  }

  getVessels() {
    return this.vessels$.asObservable();
  }

  private simulateDataUpdates() {
    interval(3000) // Atualiza a cada 3 segundos
      .pipe(
        map(() => {
          return MOCK_VESSELS.map((vessel) => ({
            ...vessel,
            latitude: vessel.latitude + (Math.random() - 0.5) * 0.01,
            longitude: vessel.longitude + (Math.random() - 0.5) * 0.01,
          }));
        })
      )
      .subscribe((updatedVessels) => {
        this.vessels$.next(updatedVessels);
      });
  }
}
