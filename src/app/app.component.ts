import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs';
import { User } from './models/user';
import * as userActions from './actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tinder Clone';
  users$: Observable<User[]> = this.store.select(
    (state: fromRoot.State) => state.allUsers.users
  );

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(userActions.getUsers());
  }

  like(user: User) {
    this.store.dispatch(userActions.likeUser({ user }));
  }

  dislike(user: User) {
    this.store.dispatch(userActions.dislikeUser({ user }));
  }
}
