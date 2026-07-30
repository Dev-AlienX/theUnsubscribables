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
  standalone: true,
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

  scrollToElement(child: any): void {
    const element = document.getElementById(child);
    if (element) {
      element.scrollIntoView();
    }
  }
}
