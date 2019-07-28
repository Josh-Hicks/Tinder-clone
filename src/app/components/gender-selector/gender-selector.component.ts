import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material';
import { Store, State } from '@ngrx/store';
import * as fromRoot from '../../reducers/';
import { updateGender } from 'src/app/actions/gender.actions';
import { Genders } from 'src/app/models/genders';
import * as userActions from '../../actions/user.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gender-selector',
  templateUrl: './gender-selector.component.html',
  styleUrls: ['./gender-selector.component.scss']
})
export class GenderSelectorComponent implements OnInit, OnDestroy {
  selected$ = this.store.select(state => state.gender);
  genderSubscription: Subscription;
  currentGender: Genders;

  constructor(
    private store: Store<fromRoot.State>,
    private state: State<fromRoot.State>
  ) {}

  ngOnInit() {
    this.currentGender = this.state.getValue().selectedGender;
    this.genderSubscription = this.selected$.subscribe(gender => {
      console.log(gender);
      this.currentGender = gender.selectedGender;
      this.store.dispatch(userActions.getUsers());
    });
  }

  ngOnDestroy() {
    if (this.genderSubscription) {
      this.genderSubscription.unsubscribe();
    }
  }

  changeSelected(gender: Genders) {
    this.store.dispatch(updateGender({ gender }));
  }
}
