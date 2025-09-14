import { Component,HostListener, inject  } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";
import { AppComponent } from '../app.component';
import { CookieManagerService } from '../../services/cookie-manager.service';


@Component({
  selector: 'app-header',
  imports: [TranslatePipe, TranslateDirective,AppComponent],
  templateUrl: './header.component.html',
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
