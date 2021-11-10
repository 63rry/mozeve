import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KingsOfHousePage } from './kings-of-house.page';

const routes: Routes = [
  {
    path: '',
    component: KingsOfHousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KingsOfHousePageRoutingModule {}
