import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodshotPageRoutingModule } from './bloodshot-routing.module';

import { BloodshotPage } from './bloodshot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodshotPageRoutingModule
  ],
  declarations: [BloodshotPage]
})
export class BloodshotPageModule {}
