import {
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Skeleton } from '../../../shared/components/skeleton/skeleton';
import { ajax } from 'rxjs/ajax';
import { map, catchError, of, tap } from 'rxjs';
import { Subscription } from 'rxjs';
import { CodeRenderer } from '../../../shared/components/code-renderer/code-renderer';
import { AJAX_EXAMPLE } from './creation-operators.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-creation-operators',
  imports: [Skeleton, CodeRenderer, JsonPipe],
  templateUrl: './creation-operators.html',
  styleUrl: './creation-operators.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationOperators implements OnInit, AfterViewInit, OnDestroy {
  streamSubscription = new Subscription();
  ajaxExampleCode = AJAX_EXAMPLE;
  ajaxLogs: any;

  constructor(private CDRef: ChangeDetectorRef) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.ajaxExample();
  }
  ajaxExample(): any {
    // let logs: any;
    const obs$ = ajax.getJSON('https://api.github.com/users?per_page=5').pipe(
      tap((userResponse) => console.log('users: ', userResponse)),
      // map((user: any) => {
      //   return { id: user.id, name: user.login };
      // }),
      map((users: any) =>
        users.map((user: any) => ({
          id: user.id,
          name: user.login,
        })),
      ),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      }),
    );
    const _that = this;
    this.streamSubscription.add(
      obs$.subscribe({
        next: (value) => {
          _that.ajaxLogs = value;
        },
        error: (err) => console.log(err),
      }),
    );
  }

  ngOnDestroy(): void {
    this.streamSubscription.unsubscribe();
  }
}
