// src/app/services/cookie-manager.service.ts
import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";


declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  private translate = inject(TranslateService);

  constructor(private cookieService: CookieService) {}

  acceptAllCookies(): void {
    this.cookieService.set('CookieAcceptedAll', 'true', 365);
    this.cookieService.delete('CookieRejectedAll');
  }

  rejectAllCookies(): void {
    this.cookieService.set('CookieRejectedAll', 'true', 365);
    this.cookieService.delete('CookieAcceptedAll');
  }

  hasAcceptedAll(): boolean {
    return this.cookieService.get('CookieAcceptedAll') === 'true';
  }

  hasRejectedAll(): boolean {
    return this.cookieService.get('CookieRejectedAll') === 'true';
  }

  /** Rimuove il banner esistente (se già presente) */
  destroyCookieBanner(): void {
    const existingBanner = document.querySelector('.cc-window');
    if (existingBanner) {
      existingBanner.remove();
    }
  }

  /** Inizializza il banner con la lingua corrente */
  initCookieBanner(): void {
    this.destroyCookieBanner(); // rimuove il precedente

    window.cookieconsent.initialise({
      palette: {
        popup: { background: '#000' },
        button: { background: '#f1d600' },
      },
      theme: 'classic',
      position: 'bottom-right',
      content: {
        message: this.translate.instant('COOKIE_BANNER.MESSAGE'),
        dismiss: this.translate.instant('COOKIE_BANNER.DISMISS'),
        allow: this.translate.instant('COOKIE_BANNER.ALLOW'),
      },
      onStatusChange: (status: string) => {
        if (status === 'allow') {
          this.acceptAllCookies();
        } else if (status === 'dismiss') {
          this.rejectAllCookies();
        }
      },
    });
  }
}