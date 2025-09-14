import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../scroll-animation.directive';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [ScrollAnimationDirective,TranslatePipe, TranslateDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
animate = false;

  constructor(private translate: TranslateService) {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 100); // Delay to allow animation
  }
}
