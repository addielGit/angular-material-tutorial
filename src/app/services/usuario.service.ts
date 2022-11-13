import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    { usuario: 'avelazco', nombre: 'Addiel', apellido: 'Velazco', sexo: 'M' },
    { usuario: 'maiyarag', nombre: 'Maiyara', apellido: 'Guerra', sexo: 'F' },
    { usuario: 'randyg', nombre: 'Randy', apellido: 'Guerra', sexo: 'M' },
    { usuario: 'tomasda', nombre: 'Tomas', apellido: 'De Armas', sexo: 'M' },
    { usuario: 'taniap', nombre: 'Tania', apellido: 'Padilla', sexo: 'F' },
    { usuario: 'sandrada', nombre: 'Sandra', apellido: 'De Armas', sexo: 'F' },
    { usuario: 'fernandov', nombre: 'Fernando', apellido: 'Velazco', sexo: 'F' },
  ];

  constructor() { }

  getUsuario(): Usuario[] {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  adicionarUsuario(user: Usuario) {
    this.listUsuarios.unshift(user);
  }
}
