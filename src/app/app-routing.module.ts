import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {SearchResultComponent} from './components/pages/search-result/search-result.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "search/:ticker",
    component: SearchResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

