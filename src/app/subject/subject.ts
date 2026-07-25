import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
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
import { Subject } from 'rxjs';
import { ConsoleLogComment } from "../shared/directive/console-log-comment";
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';

@Component({
  selector: 'app-subject',
  standalone: true,
    imports: [ConsoleLogComment],
  templateUrl: './subject.html',
  styleUrl: './subject.scss',
})
export class SubjectComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tsCode') tsCode!: ElementRef;

  observer1: any;
  observer2: any;
  outputArray: string[] = [];

  componentCode = `
export class SubjectComponent implements OnInit, OnDestroy {
  observer1: any;
  observer2: any;
  outputArray: string[] = [];
  observable$ = new Subject<any>();

  ngOnInit(): void {
    console.log('Initializing observer2');
    this.observer2 = this.observable$.subscribe({
      next: (value) => console.log('observer2 observer got: ' + value),
      error: (error) => console.log('observer2 observer got: ' + error),
      complete: () => console.log('observer2 observer completed'),
    });

    setTimeout(() => {
      console.log('Initializing observer1 after 1100ms');
      this.observer1 = this.observable$.subscribe({
        next: (value) => console.log('observer1 observer got: ' + value),
        error: (error) => console.log('observer1 observer got: ' + error),
        complete: () => console.log('observer1 observer completed'),
      });
    }, 1100);

    setTimeout(() => {
      this.observable$.next('1.1 Hello after 500ms');
      console.log('1.2 Subject emitted 1.1');
    }, 500);

    setTimeout(() => {
      this.observable$.next('1.3 Hello after 1000ms');
      console.log('1.4 Subject emitted 1.3');
    }, 1000);
    setTimeout(() => {
      this.observable$.next('1.5 Hello after 1500ms');
      console.log('1.6 Subject emitted 1.5');
      this.observable$.complete();
      console.log('1.7 Subject completed');
    }, 1500);
  }
  ngOnDestroy(): void {
    this.observer1?.unsubscribe();
    this.observer2?.unsubscribe();
  }
}`;

  observable$ = new Subject<any>();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.outputArray.push('Initializing observer2' + " // Observer 2 is about to subscribe.");
      this.observer2 = this.observable$.subscribe({
        next: (value) => this.outputArray.push('observer2 observer got: ' + value + " // Observer 2 received a value."),
        error: (error) => this.outputArray.push('observer2 observer got: ' + error + " // Observer 2 received an error."),
        complete: () => this.outputArray.push('observer2 observer completed' + " // Observer 2 received a complete notification."),
      });
      this.cdRef.detectChanges();

      setTimeout(() => {
        this.outputArray.push('Initializing observer1 after 1100ms' + " // Observer 1 is about to subscribe after a delay.");
        this.observer1 = this.observable$.subscribe({
          next: (value) => this.outputArray.push('observer1 observer got: ' + value + " // Observer 1 received a value."),
          error: (error) => this.outputArray.push('observer1 observer got: ' + error + " // Observer 1 received an error."),
          complete: () => this.outputArray.push('observer1 observer completed' + " // Observer 1 received a complete notification."),
        });
        this.cdRef.detectChanges();
      }, 1100);

      setTimeout(() => {
        this.observable$.next('1.1 Hello after 500ms');
        this.outputArray.push('1.2 Subject emitted 1.1' + " // Subject emitted '1.1 Hello after 500ms'.");
        this.cdRef.detectChanges();
      }, 500);

      setTimeout(() => {
        this.observable$.next('1.3 Hello after 1000ms');
        this.outputArray.push('1.4 Subject emitted 1.3' + " // Subject emitted '1.3 Hello after 1000ms'.");
        this.cdRef.detectChanges();
      }, 1000);
      setTimeout(() => {
        this.observable$.next('1.5 Hello after 1500ms');
        this.outputArray.push('1.6 Subject emitted 1.5' + " // Subject emitted '1.5 Hello after 1500ms'.");
        this.observable$.complete();
        this.outputArray.push('1.7 Subject completed' + " // Subject completed.");
        this.cdRef.detectChanges();
      }, 1500);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      hljs.registerLanguage('typescript', typescript);
      hljs.highlightElement(this.tsCode.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer1?.unsubscribe();
    this.observer2?.unsubscribe();
  }
}
