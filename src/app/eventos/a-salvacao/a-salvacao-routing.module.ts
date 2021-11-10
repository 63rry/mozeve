import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ASalvacaoPage } from './a-salvacao.page';

const routes: Routes = [
  {
    path: '',
    component: ASalvacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ASalvacaoPageRoutingModule {}
