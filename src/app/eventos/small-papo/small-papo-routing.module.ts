import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmallPapoPage } from './small-papo.page';

const routes: Routes = [
  {
    path: '',
    component: SmallPapoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmallPapoPageRoutingModule {}
