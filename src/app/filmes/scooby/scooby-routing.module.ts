import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoobyPage } from './scooby.page';

const routes: Routes = [
  {
    path: '',
    component: ScoobyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoobyPageRoutingModule {}
