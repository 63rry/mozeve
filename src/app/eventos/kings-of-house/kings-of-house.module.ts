import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KingsOfHousePageRoutingModule } from './kings-of-house-routing.module';

import { KingsOfHousePage } from './kings-of-house.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KingsOfHousePageRoutingModule
  ],
  declarations: [KingsOfHousePage]
})
export class KingsOfHousePageModule {}
