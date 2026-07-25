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
  ChangeDetectorRef,
} from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ConsoleLogComment } from "../shared/directive/console-log-comment";
import hljs from 'highlight.js';
import typescript from 'highlight.js/lib/languages/typescript';

@Component({
  selector: 'app-observer',
  standalone: true,
  imports: [ConsoleLogComment],
  templateUrl: './observer.html',
  styleUrl: './observer.scss',
  host: { 'ngSkipHydration': '' },
})
export class ObserverComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tsCode') tsCode!: ElementRef;

  subscription: any;
  outputArray: string[] = [];

  componentCode = `
export class ObserverComponent implements OnInit, OnDestroy {
  subscription: any;
  outputArray: string[] = [];

  // Create an observable that emits values over time
  observable$ = new Observable<string>(subscriber => {
    console.log('Observable created');
    subscriber.next('First value');
    setTimeout(() => subscriber.next('Second value'), 1000);
    setTimeout(() => subscriber.complete(), 2000);
  });

  // Create an observer object
  observer: Observer<string> = {
    next: value => console.log('Observer got a next value: ' + value),
    error: err => console.log('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Subscribing with observer...');
      this.subscription = this.observable$.subscribe(this.observer);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}`;

  // Create an observable that emits values over time
  observable$ = new Observable<string>((subscriber) => {
    this.outputArray.push('Observable created' + " // Observable created with observable$ = new Observable<string>(subscriber => { ... })");
    subscriber.next('First value');
    setTimeout(() => {
      (subscriber.next('Second value'), this.cdRef.detectChanges());
    }, 500);
    setTimeout(() => {
      (subscriber.complete(), this.outputArray.push('Observable completed' + " // The Observable has finished emitting values."));
      this.cdRef.detectChanges();
    }, 2000);
  });

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.outputArray.push('Subscribing observable$' + " // Subscribing to the Observable with the defined observer.");
      this.subscription = this.observable$.subscribe({
        next: (value) => this.outputArray.push('observer got: ' + value + " // The next method of the observer receives a value."),
        error: (error) => this.outputArray.push('observer got: ' + error + " // The error method of the observer receives an error."),
        complete: () => this.outputArray.push('observer completed' + " // The complete method of the observer is called."),
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      hljs.registerLanguage('typescript', typescript);
      hljs.highlightElement(this.tsCode.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
