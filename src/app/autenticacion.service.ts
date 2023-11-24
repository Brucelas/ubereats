import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private apiUrl = 'http://localhost:8100/'; // Reemplaza con la URL de tu backend

  constructor(public ngFireAuth: AngularFireAuth, private http: HttpClient) {}

  async contrasenares(nombre: string) {
    try {
      // Realiza una solicitud al backend para manejar el restablecimiento de contraseña
      // Aquí, se asume que el backend tiene una ruta específica para manejar el restablecimiento de contraseña
      const resetEndpoint = `${this.apiUrl}/reset-password`;
      const body = { nombre };

      // Envia la solicitud al backend
      await this.http.post(resetEndpoint, body).toPromise();
      
      // El backend debería realizar las validaciones necesarias y enviar una notificación al usuario
      // Puedes adaptar esto según los detalles de tu backend y lógica de manejo de restablecimiento de contraseña

      return true; // Éxito
    } catch (error) {
      console.error('Error al enviar la solicitud de restablecimiento de contraseña:', error);
      throw error; // Maneja el error apropiadamente en tu aplicación
    }
  }
}
