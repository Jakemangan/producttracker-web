import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {TrackerMainComponent} from './components/pages/tracker-main/tracker-main.component';
// import {AuthResolver} from './services/auth.resolver';
import {AdminPanelComponent} from './components/pages/admin-panel/admin-panel.component';
import {AdminGuard} from './services/admin.guard';
import {AuthLoginComponent} from './components/orphan-components/auth-login/auth-login.component';
import {AuthGuard} from './services/auth.guard';
import {AuthSignupComponent} from './components/orphan-components/auth-signup/auth-signup.component';
import {AuthVerifyEmailComponent} from './components/orphan-components/auth-verify-email/auth-verify-email.component';

const routes: Routes = [
  {
    path: 'app',
    component: TrackerMainComponent,
    canActivate: [AuthGuard],
    resolve: {
      // cache: AuthResolver
    }
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AuthGuard, AdminGuard],
    resolve: {
      // cache: AuthResolver
    }
  },
  {
    path: 'login',
    component: AuthLoginComponent
  },
  {
    path: 'signup',
    component: AuthSignupComponent
  },
  {
    path: 'verify-email-address',
    component: AuthVerifyEmailComponent
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

