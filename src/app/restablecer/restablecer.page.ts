import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  formularioReset: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
  ) {
    this.formularioReset = this.fb.group({
      'nombre': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  async restablecerContrasena() {
    const nombreControl = this.formularioReset.get('nombre');
    const nombreUsuario = nombreControl ? nombreControl.value : null;

    if (nombreUsuario !== null) {
      const usuarioData = localStorage.getItem('usuarios');
      if (usuarioData) {
        const usuarios = JSON.parse(usuarioData);
        const usuario = usuarios.find((u: { nombre: string }) => u.nombre === nombreUsuario);


        if (usuario !== undefined) {
          const nuevaContrasena = this.generarNuevaContrasena();
          usuario.password = nuevaContrasena;

          localStorage.setItem('usuarios', JSON.stringify(usuarios));

          const alert = await this.alertController.create({
            header: 'Contraseña Restablecida',
            message: 'La contraseña ha sido restablecida con éxito. La nueva contraseña es: ' + nuevaContrasena,
            buttons: ['Aceptar'],
          });

          await alert.present();
        } else {
          const alert = await this.alertController.create({
            header: 'Usuario no encontrado',
            message: 'El usuario no está registrado.',
            buttons: ['Aceptar'],
          });

          await alert.present();
        }
      } else {
        const alert = await this.alertController.create({
          header: 'Usuario no encontrado',
          message: 'El usuario no está registrado.',
          buttons: ['Aceptar'],
        });

        await alert.present();
      }
    } else {
      console.error('El nombre de usuario es nulo.'); // Agregar manejo adecuado según tus necesidades.
    }
  }

  generarNuevaContrasena() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let nuevaContrasena = '';
    for (let i = 0; i < 8; i++) {
      nuevaContrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return nuevaContrasena;
  }
}
