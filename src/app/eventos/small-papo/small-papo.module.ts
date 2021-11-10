import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmallPapoPageRoutingModule } from './small-papo-routing.module';

import { SmallPapoPage } from './small-papo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmallPapoPageRoutingModule
  ],
  declarations: [SmallPapoPage]
})
export class SmallPapoPageModule {}
