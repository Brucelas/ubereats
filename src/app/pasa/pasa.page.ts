import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GooglemapsComponent } from '../googlemaps/googlemaps.component';

@Component({
  selector: 'app-pasa',
  templateUrl: './pasa.page.html',
  styleUrls: ['./pasa.page.scss'],
})
export class PasaPage implements OnInit {

  usuario: any = {};

  constructor(private modalController: ModalController) {} 

  ngOnInit() {
  }
  async addDirection() {
    const ubicacion = this.usuario ? this.usuario.ubicacion : null;
    let positionInput = {
      lat: 0,
      lng: 0,
    };

    if (ubicacion) {
      positionInput = ubicacion;
    }

    const modalAdd = await this.modalController.create({
      component: GooglemapsComponent,
      animated: true,
      mode: 'md',
      componentProps: { position: positionInput },
    });

    await modalAdd.present();

    const { data } = await modalAdd.onWillDismiss();

    if (data && data.pos) {
      this.usuario.ubicacion = data.pos;
      console.log('this.usuario -> ', this.usuario);
    }
  }

}
