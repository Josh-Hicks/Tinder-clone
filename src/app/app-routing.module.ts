import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { LikesComponent } from './components/likes/likes.component';
import { DislikesComponent } from './components/dislikes/dislikes.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'likes',
    component: LikesComponent
  },
  {
    path: 'dislikes',
    component: DislikesComponent
  },
  {
    path: '**',
    redirectTo: '/bam-a-lam',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
