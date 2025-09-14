import { Component, inject } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieManagerService } from '../services/cookie-manager.service';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";

declare const window: any;
declare const TweenMax: any;
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgbModule,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    ContactComponent,
    ResumeComponent,
    TranslatePipe, TranslateDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ngOnInit() {
   // if (performance.navigation.type === 1) {
   //   window.location.href = window.location.origin;
    //}
  }

       private translate = inject(TranslateService);

  constructor(private CookieManagerService: CookieManagerService) {

     this.translate.addLangs(['it', 'en']);
        this.translate.setFallbackLang('it');
        this.translate.use('it');
   }
 

   

  ngAfterViewInit(): void {
   this.translate.onLangChange.subscribe(() => {
    this.CookieManagerService.initCookieBanner();
  });
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e: MouseEvent) {
      TweenMax.to($bigBall, 0.4, {
        x: e.clientX - 15,
        y: e.clientY - 15
      });
      TweenMax.to($smallBall, 0.1, {
        x: e.clientX - 5,
        y: e.clientY - 7
      });
    }

    // Hover an element
    function onMouseHover() {
      TweenMax.to($bigBall, 0.3, {
        scale: 4,
      });
    }
    function onMouseHoverOut() {
      TweenMax.to($bigBall, 0.3, {
        scale: 1,
      });
    }
  }

}
