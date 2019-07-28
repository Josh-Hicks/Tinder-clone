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

export interface State {
  allUsers: fromUsers.State;
}

export const reducers = {
  allUsers: fromUsers.reducer
};
