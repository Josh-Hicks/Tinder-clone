import { Action, createReducer, on } from '@ngrx/store';
import { Genders } from '../models/genders';
import * as genderActions from '../actions/gender.actions';

export interface State {
  selectedGender: Genders;
}

export const initialState: State = {
  selectedGender: Genders.both
};

const genderReducer = createReducer(
  initialState,
  on(genderActions.updateGender, (state, { gender }) => ({
    ...state,
    selectedGender: gender
  }))
);

export function reducer(state = initialState, action: Action): State {
  return genderReducer(state, action);
}
