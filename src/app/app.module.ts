import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LikesComponent } from './components/likes/likes.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DislikesComponent } from './components/dislikes/dislikes.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { GenderSelectorComponent } from './components/gender-selector/gender-selector.component';

@NgModule({
  declarations: [AppComponent, LikesComponent, UserListComponent, DislikesComponent, UserCardComponent, GenderSelectorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
