import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from './services/user.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, filter } from 'rxjs/operators';
import * as userActions from './actions/user.actions';
import { User } from './models/user';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Users] Get Users'),
      mergeMap(() => {
        return this.userService.getUsers().pipe(
          tap(console.log),
          map((res: { info: object; results: User[] }) =>
            userActions.getUsersSuccess({ users: res.results })
          ),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
