import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar, navbarConfig, navItem } from './shared/components/navbar/navbar';
import { SharedCommonService } from './shared/service/shared-common-service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  title = 'theUnsubscribables';
  navbarConfig: navbarConfig = {
    customClass: '',
    items: [
      { id: 1, name: 'Observable', routerLink: '/observable', subnav: [] },
      { id: 2, name: 'Observer', routerLink: '/observer', subnav: [] },
      { id: 3, name: 'Subject', routerLink: '/subject', subnav: [] },
      { id: 4, name: 'Behavior Subject', routerLink: '/behavior-subject', subnav: [] },
      { id: 5, name: 'Replay Subject', routerLink: '/replay-subject', subnav: [] },
      { id: 7, name: 'Interview Questions', routerLink: '/interview-questions', subnav: [] },
    ],
  };
  operators!: navItem;
  getJsonData = inject(SharedCommonService);
  constructor(private cdRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.operators = {
      id: 6,
      name: 'Operators',
      routerLink: '/operators',
      subnav: [],
    };
    this.getJsonData.getJsonData<any[]>().then((data) => {
      this.operators.subnav = data.map((item) => ({
        ...item,
        path: this.toCamelCase(item.name),
      }));
    });
    this.processNavbarConfig(this.operators);
    this.cdRef.detectChanges();
  }

  toCamelCase(str: string): string {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
  }

  processNavbarConfig(data: any): void {
    const index = this.navbarConfig.items.findIndex((item) => item.name === 'Replay Subject');
    this.navbarConfig.items.splice(index + 1, 0, data);
  }
}
