import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasaPageRoutingModule } from './pasa-routing.module';

import { PasaPage } from './pasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasaPageRoutingModule
  ],
  declarations: [PasaPage]
})
export class PasaPageModule {}
