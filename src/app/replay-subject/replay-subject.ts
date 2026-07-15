import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ConsoleLogComment } from "../shared/directive/console-log-comment";
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
    imports: [ConsoleLogComment],
  templateUrl: './replay-subject.html',
  styleUrl: './replay-subject.scss'
})
export class ReplaySubjectComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tsCode') tsCode!: ElementRef;
  @ViewChild('htmlCodeRef') htmlCodeRef!: ElementRef;

  observer1: any;
  observer2: any;
  outputArray: string[] = [];

  componentCode = `
export class ReplaySubjectComponent implements OnInit, OnDestroy {
  observer1: any;
  observer2: any;
  outputArray: string[] = [];
  // Buffer size of 2
  subject$ = new ReplaySubject<string>(2); 

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Emitting "Value 1"');
      this.subject$.next('Value 1');
      console.log('Emitting "Value 2"');
      this.subject$.next('Value 2');
      console.log('Emitting "Value 3"');
      this.subject$.next('Value 3');

      console.log('Subscribing observer 1');
      this.observer1 = this.subject$.subscribe({
        next: value => console.log('Observer 1 got: ' + value),
        complete: () => console.log('Observer 1 completed'),
      });

      console.log('Emitting "Value 4"');
      this.subject$.next('Value 4');

      setTimeout(() => {
        console.log('Subscribing late observer 2');
        this.observer2 = this.subject$.subscribe({
          next: value => console.log('Observer 2 got: ' + value),
          complete: () => console.log('Observer 2 completed'),
        });
        this.subject$.complete();
        console.log('Subject completed');
      }, 1000);
    }
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

  // Buffer size of 2
  subject$ = new ReplaySubject<string>(2); 

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.outputArray.push('Emitting "Value 1"' + " // The ReplaySubject emits 'Value 1'.");
      this.subject$.next('Value 1');
      this.cdRef.detectChanges();

      this.outputArray.push('Emitting "Value 2"' + " // The ReplaySubject emits 'Value 2'.");
      this.subject$.next('Value 2');
      this.cdRef.detectChanges();

      this.outputArray.push('Emitting "Value 3"' + " // The ReplaySubject emits 'Value 3'. Buffer now contains 'Value 2', 'Value 3'.");
      this.subject$.next('Value 3');
      this.cdRef.detectChanges();

      this.outputArray.push('Subscribing observer 1' + " // Observer 1 subscribes, receiving buffered values 'Value 2', 'Value 3'.");
      this.observer1 = this.subject$.subscribe({
        next: value => this.outputArray.push('Observer 1 got: ' + value + " // Observer 1 received a value."),
        complete: () => this.outputArray.push('Observer 1 completed' + " // Observer 1 received a complete notification."),
      });
      this.cdRef.detectChanges();

      this.outputArray.push('Emitting "Value 4"' + " // The ReplaySubject emits 'Value 4'. Buffer now contains 'Value 3', 'Value 4'.");
      this.subject$.next('Value 4');
      this.cdRef.detectChanges();

      setTimeout(() => {
        this.outputArray.push('Subscribing late observer 2' + " // Observer 2 subscribes after a delay, receiving buffered values 'Value 3', 'Value 4'.");
        this.observer2 = this.subject$.subscribe({
          next: value => this.outputArray.push('Observer 2 got: ' + value + " // Observer 2 received a value."),
          complete: () => this.outputArray.push('Observer 2 completed' + " // Observer 2 received a complete notification."),
        });
        this.cdRef.detectChanges();

        this.subject$.complete();
        this.outputArray.push('Subject completed' + " // The ReplaySubject completes.");
        this.cdRef.detectChanges();
      }, 1000);
    }
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
