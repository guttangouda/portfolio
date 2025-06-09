import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(RouterModule,
      CommonModule,
      BrowserAnimationsModule
    ),
  ]
};
