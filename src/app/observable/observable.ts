import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ConsoleLogComment } from '../shared/directive/console-log-comment';
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [ConsoleLogComment],
  templateUrl: './observable.html',
  styleUrl: './observable.scss',
  host: { 'ngSkipHydration': '' },
})
export class ObservableComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tsCode') tsCode!: ElementRef;
  @ViewChild('htmlCodeRef') htmlCodeRef!: ElementRef;

  observer1: any;
  observer2: any;
  outputArray: string[] = [];

  componentCode = `
export class ObservableComponent implements OnInit, OnDestroy {
  observer1: any;
  observer2: any;
  outputArray: string[] = [];
  observable$ = new Observable<any>((observer) => {
    console.log('1.0 Observable initialized');
    observer.next('1.1 Hello from Observable$');
    console.log('1.2 Observable emitted 1.1');
    observer.complete();
    console.log('1.4 Observable completed');
  });

  ngOnInit(): void {
    console.log('Initializing observer2');
    this.observer1 = this.observable$.subscribe({
      next: (value) => console.log('observer1 observer got: ' + value),
      error: (error) => console.log('observer1 observer got: ' + error),
      complete: () => console.log('observer1 observer completed'),
    });

    console.log('Initializing observer1');
    this.observer2 = this.observable$.subscribe({
      next: (value) => console.log('observer2 observer got: ' + value),
      error: (error) => console.log('observer2 observer got: ' + error),
      complete: () => console.log('observer2 observer completed'),
    });
  }
  ngOnDestroy(): void {
    this.observer1?.unsubscribe();
    this.observer2?.unsubscribe();
  }
}`;
  htmlCode = `
<div class="output-container">
  <ol>
    @for (item of outputArray; track $index) {
      <li>{{ item }}</li>
    }
  </ol>
</div>`;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  observable$ = new Observable<any>((observer) => {
    this.outputArray.push(
      '1.0 Observable initialized' +
        ' // The Observable is initialized. This runs for each subscriber.',
    );
    observer.next('1.1 Hello from Observable$');
    this.outputArray.push(
      '1.2 Observable emitted 1.1' + ' // The Observable emits its first value.',
    );
    observer.complete();
    this.outputArray.push('1.4 Observable completed' + ' // The Observable completes.');
  });

  ngOnInit(): void {
    this.outputArray.push('Initializing observer2' + ' // Observer 2 is about to subscribe.');
    this.observer1 = this.observable$.subscribe({
      next: (value) =>
        this.outputArray.push(
          'observer1 observer got: ' + value + ' // Observer 1 received a value.',
        ),
      error: (error) =>
        this.outputArray.push(
          'observer1 observer got: ' + error + ' // Observer 1 received an error.',
        ),
      complete: () =>
        this.outputArray.push(
          'observer1 observer completed' + ' // Observer 1 received a complete notification.',
        ),
    });

    this.outputArray.push('Initializing observer1' + ' // Observer 1 is about to subscribe.');
    this.observer2 = this.observable$.subscribe({
      next: (value) =>
        this.outputArray.push(
          'observer2 observer got: ' + value + ' // Observer 2 received a value.',
        ),
      error: (error) =>
        this.outputArray.push(
          'observer2 observer got: ' + error + ' // Observer 2 received an error.',
        ),
      complete: () =>
        this.outputArray.push(
          'observer2 observer completed' + ' // Observer 2 received a complete notification.',
        ),
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      hljs.registerLanguage('typescript', typescript);
      hljs.highlightElement(this.tsCode.nativeElement);
      hljs.highlightElement(this.htmlCodeRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer1?.unsubscribe();
    this.observer2?.unsubscribe();
  }
}
