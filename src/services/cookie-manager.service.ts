// src/app/services/cookie-manager.service.ts
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

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
}
