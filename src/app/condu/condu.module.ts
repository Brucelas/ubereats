import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConduPageRoutingModule } from './condu-routing.module';

import { ConduPage } from './condu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConduPageRoutingModule
  ],
  declarations: [ConduPage]
})
export class ConduPageModule {}
