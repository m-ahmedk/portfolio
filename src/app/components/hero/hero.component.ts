import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const typed = new Typed('#typed-text', {
      strings: [
        "I specialize in .NET Core and Node.js.",
        "I work on ERPs and backend systems.",
        "I enjoy building scalable platforms.",
        "I care about clean, maintainable code."
      ],
      typeSpeed: 30,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}