import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled', // Enables parsing the #fragment
        scrollPositionRestoration: 'top', // Resets scroll position when navigating to new pages
      }),
    ),
    provideZonelessChangeDetection(),
  ],
};
