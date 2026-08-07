export const AJAX_EXAMPLE = `import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';
 
const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
  map((users: any) => users.map((user: any) => ({id: user.id,name: user.login,})),),
  catchError(error => {
    console.log('error: ', error);
    return of(error);
  })
);
 
obs$.subscribe({
  next: value => console.log(value),
  error: err => console.log(err)
});`;
