import { Component } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-copa',
  templateUrl: './copa.page.html',
  styleUrls: ['./copa.page.scss'],
})
export class CopaPage {
  selectedVal: number = 1;
  data: any[] = [];
  formularioLogin: FormGroup;
  usuario: any = {}; 

  constructor(private platform: Platform, private router: Router, public alertController: AlertController, public fb: FormBuilder, public navCtrl: NavController) {
    this.platform.ready().then(() => {
      this.data = [{ id: 1, name: "Conductor" }, { id: 2, name: "Pasajero" }];
    });

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ionViewWillEnter() {
   
    var usuarioData = localStorage.getItem('usuario');
    if (usuarioData) {
      this.usuario = JSON.parse(usuarioData);
    }
  }

  redirigirSegunSeleccion() {
    if (this.selectedVal === 1) {
      this.router.navigate(['/condu']);
    } else if (this.selectedVal === 2) {
      this.router.navigate(['/pasa']);
    }
  }

  async ingresar() {
    var f = this.formularioLogin.value;

    if (this.usuario.nombre === f.nombre && this.usuario.password === f.password) {
      console.log('Ingresado');
      localStorage.setItem('Ingresado', 'true');
      this.navCtrl.navigateRoot('copa');
    } else {
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos que ingresaste son incorrectos',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }
}
