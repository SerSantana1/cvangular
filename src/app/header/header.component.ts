import { Component, HostListener, inject, ChangeDetectionStrategy } from '@angular/core';
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import { CookieManagerService } from '../../services/cookie-manager.service';


@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.component.scss'
})



export class HeaderComponent {
  isAtTop = true;
  currentLang = 'it';
  private translate = inject(TranslateService);
  dropdownOpen = true;


  languages = [
  { code: 'it', label: 'IT', flag: 'assets/flags/it.svg' },
  { code: 'en', label: 'EN', flag: 'assets/flags/gb.svg' }
];

constructor(private CookieManagerService: CookieManagerService){}

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.dropdownOpen = false;
    console.log(CookieManagerService)
    this.CookieManagerService.initCookieBanner();  
  }

  get currentFlag(): string {
  const lang = this.languages.find(l => l.code === this.currentLang);
  return lang ? lang.flag : '';
}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isAtTop = window.scrollY === 0;
  }


}
