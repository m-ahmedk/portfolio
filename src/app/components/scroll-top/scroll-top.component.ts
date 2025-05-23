import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-scroll-top',
  imports: [CommonModule],
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})

export class ScrollTopComponent {
  showButton = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.showButton = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}