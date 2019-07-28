import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action,
  combineReducers
} from '@ngrx/store';
import * as fromUsers from './user.reducer';
import * as fromGender from './gender.reducer';

export interface State {
  allUsers: fromUsers.State;
  gender: fromGender.State;
}

export const reducers = {
  allUsers: fromUsers.reducer,
  gender: fromGender.reducer
};
