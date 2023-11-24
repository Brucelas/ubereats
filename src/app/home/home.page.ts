import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
restablecerContrasena() {
throw new Error('Method not implemented.');
}

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
  public alertController: AlertController,
  public navCtrl: NavController) {

this.formularioLogin = this.fb.group({
  'nombre': new FormControl("", Validators.required),
  'password': new FormControl("", Validators.required)
})

  }

  ngOnInit() {
  }
  
  async ingresar() {
    var f = this.formularioLogin.value;
  
    var usuarioData = localStorage.getItem('usuario');
  
    if (usuarioData) {
      var usuario = JSON.parse(usuarioData);
  
      if (usuario.nombre === f.nombre && usuario.password === f.password) {
        console.log('Ingresado');
        localStorage.setItem('Ingresado','true');
        this.navCtrl.navigateRoot('copa');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos Incorrectos',
          message: 'Los datos que ingresaste son incorrectos',
          buttons: ['Aceptar']
        });
  
        await alert.present();
        return;
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'El usuario no esta registrado',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
  }
  irARestablecer() {
    this.navCtrl.navigateForward('/restablecer');
}
}
