import { Component, ElementRef, inject, OnInit } from '@angular/core';
import { NavStateService } from '../../service/nav-state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-nav-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-nav-button.html',
  styleUrl: './floating-nav-button.scss',
})
export class FloatingNavButton implements OnInit {
  private navStateService = inject(NavStateService);
  private elementRef = inject(ElementRef);
  private headerHeight = 0;

  ngOnInit(): void {
    const header = document.querySelector('.header') as HTMLElement;
    if (header) {
      this.headerHeight = header.offsetHeight;
    }
  }

  toggleNav() {
    this.navStateService.toggleNav();
  }

  constrainPosition = (point: { x: number; y: number }) => {
    const newPoint = { ...point };
    if (newPoint.y < this.headerHeight) {
      newPoint.y = this.headerHeight;
    }
    return newPoint;
  };
}
