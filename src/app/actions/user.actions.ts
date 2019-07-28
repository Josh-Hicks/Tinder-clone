import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const getUsers = createAction('[Users] Get Users');

export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  props<{ users: User[] }>()
);

export const likeUser = createAction(
  '[Users] Like User',
  props<{ user: User }>()
);

export const dislikeUser = createAction(
  '[Users] Dislike User',
  props<{ user: User }>()
);
