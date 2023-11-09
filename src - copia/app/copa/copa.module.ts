import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CopaPageRoutingModule } from './copa-routing.module';

import { CopaPage } from './copa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CopaPageRoutingModule
  ],
  declarations: [CopaPage]
})
export class CopaPageModule {}
