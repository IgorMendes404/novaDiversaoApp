import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GravityFallsPage } from './gravity-falls.page';

const routes: Routes = [
  {
    path: '',
    component: GravityFallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GravityFallsPageRoutingModule {}
