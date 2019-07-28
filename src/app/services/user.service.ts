import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Genders } from '../models/genders';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentGender: Genders;

  constructor(private http: HttpClient, private store: Store<fromRoot.State>) {
    this.store
      .select(state => state.gender)
      .subscribe(gender => (this.currentGender = gender.selectedGender));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      `https://randomuser.me/api/?nat=us&gender=${
        this.currentGender
      }&inc=name,picture,dob,id&results=50`
    );
  }
}
