import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasaPage } from './pasa.page';

const routes: Routes = [
  {
    path: '',
    component: PasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasaPageRoutingModule {}
