import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {TrackerMainComponent} from './components/pages/tracker-main/tracker-main.component';
import {AuthGuard} from '@auth0/auth0-angular';
import {AuthResolver} from './services/auth.resolver';

const routes: Routes = [
  {
    path: 'app',
    component: TrackerMainComponent,
    canActivate: [AuthGuard],
    resolve: {
      cache: AuthResolver
    }
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

