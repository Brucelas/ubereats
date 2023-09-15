import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-copa',
  templateUrl: './copa.page.html',
  styleUrls: ['./copa.page.scss'],
})
export class CopaPage {
  selectedVal: number = 1;
  data: any[] = [];
  
  constructor(private platform: Platform, private router: Router) {
    this.platform.ready().then(() => {
      this.data = [{ id: 1, name: "Conductor" }, { id: 2, name: "Pasajero" }];
    });
  }

  redirigirSegunSeleccion() {
    if (this.selectedVal === 1) {
      this.router.navigate(['/condu']);
    } else if (this.selectedVal === 2) {
      this.router.navigate(['/pasa']);
    }
  }
}
