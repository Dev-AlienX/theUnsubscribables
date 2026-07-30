import { Component, OnDestroy, OnInit } from '@angular/core';
import { Skeleton } from '../../../shared/components/skeleton/skeleton';
import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creation-operators',
  imports: [Skeleton],
  templateUrl: './creation-operators.html',
  styleUrl: './creation-operators.scss',
})
export class CreationOperators implements OnInit, OnDestroy {
  streamSubscription = new Subscription();

  constructor() {}
  ngOnInit(): void {}

  ajaxExample(): any {
    const obs$ = ajax.getJSON('https://api.github.com/users?per_page=5').pipe(
      map((userResponse) => console.log('users: ', userResponse)),
      catchError((error) => {
        console.log('error: ', error);
        return of(error);
      }),
    );

    this.streamSubscription.add(
      obs$.subscribe({
        next: (value) => console.log(value),
        error: (err) => console.log(err),
      }),
    );
  }

  ngOnDestroy(): void {
    this.streamSubscription.unsubscribe();
  }
}
