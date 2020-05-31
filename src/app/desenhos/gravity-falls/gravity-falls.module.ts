import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GravityFallsPageRoutingModule } from './gravity-falls-routing.module';

import { GravityFallsPage } from './gravity-falls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GravityFallsPageRoutingModule
  ],
  declarations: [GravityFallsPage]
})
export class GravityFallsPageModule {}
