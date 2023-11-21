import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GooglemapsComponent } from './googlemaps.component';
import { GooglemapsService } from './googlemaps.service';

@NgModule({
  declarations: [
    GooglemapsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  providers: [
    GooglemapsService 
  ],
  exports: [
    GooglemapsComponent,
  ]
})
export class GooglemapsPageModule {}
