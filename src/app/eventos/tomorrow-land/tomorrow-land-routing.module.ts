import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomorrowLandPage } from './tomorrow-land.page';

const routes: Routes = [
  {
    path: '',
    component: TomorrowLandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomorrowLandPageRoutingModule {}
