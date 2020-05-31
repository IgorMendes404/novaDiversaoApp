import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoobyPageRoutingModule } from './scooby-routing.module';

import { ScoobyPage } from './scooby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoobyPageRoutingModule
  ],
  declarations: [ScoobyPage]
})
export class ScoobyPageModule {}
