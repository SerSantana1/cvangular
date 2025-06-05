import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieManagerService } from '../services/cookie-manager.service';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ngOnInit() {
    if (performance.navigation.type === 1) {
      window.location.href = window.location.origin;
    }
  }

  constructor(private CookieManagerService: CookieManagerService) { }

  ngAfterViewInit(): void {
    window.cookieconsent.initialise({
      palette: {
        popup: { background: '#000' },
        button: { background: '#f1d600' },
      },
      theme: 'classic',
      position: 'bottom-right',
      content: {
        message:
          'Utilizziamo i cookie per migliorare l\'esperienza utente e analizzare il traffico anonimo del sito solo per scopi analitici e per migliorare la qualità dei contenuti che forniamo. Non raccogliamo dati personali sensibili, né profiliamo i nostri utenti. Cliccando su "Accetta tutti", acconsenti all\'utilizzo di tutti i cookie in conformità con la nostra Informativa sulla Privacy.',
        dismiss: 'Accetta tutti',
        allow: 'Personalizza',
      },
      onStatusChange: (status: string) => {
        if (status === 'allow') {
          this.CookieManagerService.acceptAllCookies();
        } else if (status === 'dismiss') {
          this.CookieManagerService.rejectAllCookies();
        }
      },
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
