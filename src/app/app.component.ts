import { Component,Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from "./contact/contact.component";
import { ResumeComponent } from "./resume/resume.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgbModule, HeaderComponent, HeroComponent, FooterComponent, ContactComponent, ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CVAngular';


  private trail: HTMLElement[] = [];
  private trailLength = 20;
  private isBrowser: boolean;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.renderer.setStyle(document.body, 'cursor', 'none');
    }
  }

  @HostListener('document:mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  if (!this.isBrowser) return;

  const char = this.getRandomMatrixChar();
  const el = this.renderer.createElement('span');
  this.renderer.setProperty(el, 'textContent', char);
  this.renderer.addClass(el, 'matrix-char');
  this.renderer.setStyle(el, 'left', `${event.pageX}px`);
  this.renderer.setStyle(el, 'top', `${event.pageY}px`);
  this.renderer.appendChild(document.body, el);

  this.trail.push(el);

  if (this.trail.length > this.trailLength) {
    const old = this.trail.shift();
    if (old) this.renderer.removeChild(document.body, old);
  }

  // Animate each element's opacity
  this.trail.forEach((el, index) => {
    const opacity = 1 - index / this.trailLength;
    this.renderer.setStyle(el, 'opacity', `${opacity}`);
  });

  // Remove after short delay
  setTimeout(() => {
    if (this.trail.includes(el)) {
      this.trail = this.trail.filter(e => e !== el);
      this.renderer.removeChild(document.body, el);
    }
  }, 2500);
}

// Random char generator
getRandomMatrixChar(): string {
  const chars = 'アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return chars.charAt(Math.floor(Math.random() * chars.length));
}


}
