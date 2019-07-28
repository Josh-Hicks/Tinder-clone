import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

export interface State {
  users: User[];
  dislikes: User[];
  likes: User[];
}

export const initialState: State = {
  users: [],
  dislikes: [],
  likes: []
};

const userReducer = createReducer(
  initialState,
  on(UserActions.getUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.likeUser, (state, { user }) => ({
    ...state,
    users: state.users.filter(currentUser => currentUser.id !== user.id),
    likes: [...state.likes, user]
  })),
  on(UserActions.dislikeUser, (state, { user }) => ({
    ...state,
    users: state.users.filter(currentUser => currentUser.id !== user.id),
    dislikes: [...state.dislikes, user]
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
