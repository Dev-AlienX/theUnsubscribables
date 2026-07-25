export interface subNavItem {
  id: string;
  name: string;
  path?: string;
  routerLink?: string;
  definition: string;
  operators: string[];
  isOpen?: boolean;
}
export interface navItem {
  id?: number | string;
  name: string;
  path?: string;
  routerLink: string;
  subnav: subNavItem[];
  isOpen?: boolean;
}
export interface navbarConfig {
  customClass: string;
  items: navItem[];
}

import { Component, input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, UpperCasePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  config = input<navbarConfig>();
  subnavIndex: string | null = null;
  constructor() {}
  ngOnInit(): void {}

  subnavOpen(item: any) {
    if (item.isOpen === undefined) {
      item.isOpen = true;
    } else {
      item.isOpen = !item.isOpen;
    }
  }

  scrollToElement(child: any, parent: any): void {
    // const containerEl = document.getElementById(parent);
    // const targetEl = document.getElementById(child);
    // if (containerEl && targetEl) {
    //   // Calculate how far the target is from the top of the container
    //   const targetTop = containerEl.offsetTop;

    //   // Scroll the container directly
    //   targetEl.scrollTop = 0;

    // }
    const element = document.getElementById(child);
    if (element) {
      element.scrollIntoView();
    }
  }
}
