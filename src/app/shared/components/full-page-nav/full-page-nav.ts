import { Component, inject, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavStateService } from '../../service/nav-state';
import { Navbar, navbarConfig } from '../navbar/navbar';

@Component({
  selector: 'app-full-page-nav',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './full-page-nav.html',
  styleUrl: './full-page-nav.scss'
})
export class FullPageNav {
  @Input() navbarConfig!: navbarConfig;
  private navStateService = inject(NavStateService);
  public isNavOpen: Signal<boolean> = this.navStateService.isNavOpen;

  closeNav() {
    this.navStateService.closeNav();
  }
}
