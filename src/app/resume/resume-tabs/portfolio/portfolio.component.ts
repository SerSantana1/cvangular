import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
private handlers: { element: Element; type: string; listener: EventListenerOrEventListenerObject }[] = [];

  ngAfterViewInit(): void {
    const galleryLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.gallery ul li a'));
    const galleryList = document.querySelector<HTMLElement>('.gallery ul');
    const closeButton = document.querySelector<HTMLElement>('.close');
    const topElement = document.getElementById('top');

    galleryLinks.forEach(link => {
      const clickHandler = (event: Event) => {
        event.preventDefault();
        const href = link.getAttribute('href');
        if (!href) return;
        const target = document.querySelector<HTMLElement>(href);
        if (!target) return;

        galleryList?.classList.add('item_open');
        target.classList.add('item_open');
        topElement?.scrollIntoView({ behavior: 'smooth' });
      };

      link.addEventListener('click', clickHandler);
      this.handlers.push({ element: link, type: 'click', listener: clickHandler });
    });

    if (closeButton) {
      const closeHandler = (event: Event) => {
        event.preventDefault();
        document.querySelectorAll<HTMLElement>('.port, .gallery ul').forEach(el => el.classList.remove('item_open'));
      };
      closeButton.addEventListener('click', closeHandler);
      this.handlers.push({ element: closeButton, type: 'click', listener: closeHandler });
    }
  }

  ngOnDestroy(): void {
    this.handlers.forEach(({ element, type, listener }) => element.removeEventListener(type, listener));
    this.handlers = [];
  }

}
