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

}
