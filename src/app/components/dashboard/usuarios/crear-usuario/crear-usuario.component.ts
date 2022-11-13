import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  form: FormGroup;

  sexs: any[] = [
    'femenino', 'masculino'
  ];

  constructor(
    private fb: FormBuilder,
    private usuarioSvc: UsuarioService,
    private _snackBar: MatSnackBar,
    private router: Router,

  ) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    const usuario: Usuario = {
      usuario: this.form.value.usuario,
      nombre: this.form.value.usuario,
      apellido: this.form.value.usuario,
      sexo: this.form.value.usuario,
    };

    this.usuarioSvc.adicionarUsuario(usuario);
    this.router.navigate(['/dashboard/usuarios']);

    this._snackBar.open('El usuario fue creado satisfactoriamente.', '', {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
