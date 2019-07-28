import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as userActions from '../../actions/user.actions';

@Component({
  selector: 'app-dislikes',
  templateUrl: './dislikes.component.html',
  styleUrls: ['./dislikes.component.scss']
})
export class DislikesComponent implements OnInit {
  users$: Observable<User[]> = this.store.select(
    (state: fromRoot.State) => state.allUsers.dislikes
  );

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(userActions.getUsers());
  }

  like(user: User) {
    this.store.dispatch(userActions.likeUser({ user }));
  }
}
