import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as userActions from '../../actions/user.actions';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  users$: Observable<User[]> = this.store.select(
    (state: fromRoot.State) => state.allUsers.likes
  );

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(userActions.getUsers());
  }

  dislike(user: User) {
    this.store.dispatch(userActions.dislikeUser({ user }));
  }
}
