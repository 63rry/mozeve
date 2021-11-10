import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ASalvacaoPageRoutingModule } from './a-salvacao-routing.module';

import { ASalvacaoPage } from './a-salvacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ASalvacaoPageRoutingModule
  ],
  declarations: [ASalvacaoPage]
})
export class ASalvacaoPageModule {}
