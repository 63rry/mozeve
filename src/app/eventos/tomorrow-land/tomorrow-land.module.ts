import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomorrowLandPageRoutingModule } from './tomorrow-land-routing.module';

import { TomorrowLandPage } from './tomorrow-land.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomorrowLandPageRoutingModule
  ],
  declarations: [TomorrowLandPage]
})
export class TomorrowLandPageModule {}
