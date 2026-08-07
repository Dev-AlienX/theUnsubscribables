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

import { Component, inject, input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd, Event } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { filter, Subscription } from 'rxjs';

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

  private router = inject(Router);
  private routeSub!: Subscription;
  constructor() {}
  ngOnInit(): void {
    this.routeSub = this.router.events
      .pipe(
        // Filter specifically for the successful end of a navigation cycle
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd),
      )
      .subscribe((event: NavigationEnd) => {
        console.log('Route changed to:', event.urlAfterRedirects);
        let route = event.urlAfterRedirects;
        const splitRoute = route.split('/');
        if (splitRoute[1] === 'operators') {
          const navConfig: any = this.config()?.items[5];
          navConfig.isOpen = true;
        }
      });
  }

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
