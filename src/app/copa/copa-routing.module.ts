import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CopaPage } from './copa.page';

const routes: Routes = [
  {
    path: '',
    component: CopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CopaPageRoutingModule {}
