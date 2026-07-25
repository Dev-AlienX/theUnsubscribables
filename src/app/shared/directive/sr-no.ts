import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  inject,
  OnInit,
  AfterViewChecked,
  Inject,
  PLATFORM_ID,
  input,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[SrNo]',
  standalone: true,
})
export class SrNo implements AfterViewChecked {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngAfterViewChecked(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    const fullText = element.innerText;
    const parts = fullText.split('.');
    
    if (parts.length > 0) {
      const serialNumber = parts[0];
      const restOfText = parts.slice(1).join('.').trim();

      // Create new span for the serial number
      const srNoElement = this.renderer.createElement('span');
      const srNoText = this.renderer.createText(`${serialNumber}.`);
      this.renderer.appendChild(srNoElement, srNoText);
      this.renderer.addClass(srNoElement, 'questionNo'); // Optional: for styling

      // Create a text node for the remaining text
      const textNode = this.renderer.createText(` ${restOfText}`);

      // Clear the original element's content
      element.innerHTML = '';

      // Append the new nodes
      this.renderer.appendChild(element, srNoElement);
      this.renderer.appendChild(element, textNode);
    }
  }

  constructor() {}
}
