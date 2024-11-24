import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        loadComponent: () =>
          import('./features/components/map/map.component').then(
            (m) => m.MapComponent
          ),
      },
    ]),
  ],
};
