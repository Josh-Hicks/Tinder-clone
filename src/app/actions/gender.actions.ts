import { createAction, props } from '@ngrx/store';
import { Genders } from '../models/genders';

export const updateGender = createAction(
  '[Gender] Update',
  props<{ gender: Genders }>()
);
