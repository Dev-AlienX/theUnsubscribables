import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavStateService {
  public isNavOpen = signal(false);

  public toggleNav() {
    this.isNavOpen.update(value => !value);
  }

  public openNav() {
    this.isNavOpen.set(true);
  }

  public closeNav() {
    this.isNavOpen.set(false);
  }
}
