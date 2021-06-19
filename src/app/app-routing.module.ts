import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {TrackerMainComponent} from './components/pages/tracker-main/tracker-main.component';
// import {AuthResolver} from './services/auth.resolver';
import {AdminPanelComponent} from './components/pages/admin-panel/admin-panel.component';
import {AdminGuard} from './services/admin.guard';
import {AuthLoginComponent} from './components/orphan-components/auth-login/auth-login.component';
import {AuthGuard} from './services/auth.guard';
import {TestProductComponent} from './components/pages/test-product/test-product.component';
import {AuthResolver} from './services/auth.resolver';

const routes: Routes = [
  {
    path: 'app',
    component: TrackerMainComponent,
    canActivate: [AuthGuard],
    resolve: [AuthResolver]
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'login',
    component: AuthLoginComponent
  },
  {
    path: 'random-price-product',
    component: TestProductComponent
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

