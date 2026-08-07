import {
  Component,
  ElementRef,
  input,
  OnDestroy,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';

@Component({
  selector: 'app-code-renderer',
  imports: [],
  templateUrl: './code-renderer.html',
  styleUrl: './code-renderer.scss',
})
export class CodeRenderer implements OnDestroy {
  code = input.required<string>();
  language = input<string>();
  links = input<string[]>(['map', 'of', 'catchError', 'subscribe', 'ajax', 'pipe']);
  clickableElements: object[] = [];
  private router = inject(Router);
  @ViewChild('tsCode') tsCode!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    hljs.registerLanguage('typescript', typescript);
    hljs.highlightElement(this.tsCode.nativeElement);
    const allFunctionSpan = this.tsCode.nativeElement.querySelectorAll('span.function_');
    allFunctionSpan.forEach((span: any) => {
      const spanHas = this.links().includes(span.textContent?.trim());
      if (spanHas) {
        this.renderer.setStyle(span, 'cursor', 'pointer');
        this.renderer.setStyle(span, 'pointer-events', 'auto');

        span.addEventListener('click', (event: Event) => {
          this.onSpanClick(span.textContent, event);
        });

        this.clickableElements.push(span);
      }
    });
  }

  onSpanClick(text: string, event: Event) {
    switch (text) {
      case 'map':
        // this.router.navigate(['/operators/transformationOperators']);
        this.router.navigate(['/operators/transformationOperators'], { fragment: 'map' })

        break;

      default:
        break;
    }
  }

  ngOnDestroy(): void {
    if (this.clickableElements) {
      this.clickableElements.forEach((element: any) => {
        element.removeEventListener('click', this.onSpanClick);
      });
    }
  }
}
