import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodshotPage } from './bloodshot.page';

const routes: Routes = [
  {
    path: '',
    component: BloodshotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodshotPageRoutingModule {}
