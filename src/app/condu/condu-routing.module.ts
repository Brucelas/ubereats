import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConduPage } from './condu.page';

const routes: Routes = [
  {
    path: '',
    component: ConduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConduPageRoutingModule {}
