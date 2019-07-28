import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as userActions from '../../actions/user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
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
