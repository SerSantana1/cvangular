import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAtTop = true; // Track if the menu is at the top

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isAtTop = window.scrollY === 0;
  }
}
