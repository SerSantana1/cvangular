import { Directive, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'animate-in');
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.unobserve(this.el.nativeElement);
      this.observer.disconnect();
    }
  }
}
