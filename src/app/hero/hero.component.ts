import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../scroll-animation.directive';

@Component({
  selector: 'app-hero',
  imports: [ScrollAnimationDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
animate = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 100); // Delay to allow animation
  }
}
