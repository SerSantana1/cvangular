import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import {provideHttpClient, withXhr} from "@angular/common/http";


import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, withNoIncrementalHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideHttpClient(withXhr()),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './assets//i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'it',
      lang: 'it'
    })
    , provideClientHydration(withEventReplay(), withNoIncrementalHydration())]
};
