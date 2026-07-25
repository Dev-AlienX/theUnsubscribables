import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appConsoleLogComment]',
  standalone: true,
})
export class ConsoleLogComment implements OnInit {
  private elementRef = inject(ElementRef);
  private cdRef = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);
  constructor() {}
  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => {
      const el = this.elementRef.nativeElement as HTMLElement;
      const text = (el.textContent || '').trim();
      const parts = text.split(' // ');
      const part1 = parts[0] || '';
      const part2 = parts.slice(1).join(' // ') || '';

      el.innerHTML = '';

      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.width = '100%';
      wrapper.style.gap = '12px';
      wrapper.style.alignItems = 'flex-start';

      const left = document.createElement('span');
      left.style.flex = '0 0 40%';
      left.style.wordBreak = 'break-word';
      left.style.color = 'inherit';
      left.textContent = part1;

      const right = document.createElement('span');
      right.style.flex = '1 1 60%';
      right.style.wordBreak = 'break-word';
      
      right.textContent = part2 ? '// ' + part2 : '';

      wrapper.appendChild(left);
      wrapper.appendChild(right);
      el.appendChild(wrapper);
    }, 400);
    this.cdRef.detectChanges();
  }
}
