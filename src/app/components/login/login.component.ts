import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  ingresar(): void {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario === 'addiel' && password === 'ok') {
      // Redireccionar al dashboard
      this.fakeLoading();
    } else {
      // Mostrar sms de error
      this.error();
      this.form.reset();
    }

    console.log({ usuario, password });
  }

  error(): void {
    this._snackBar.open('El Usuario o la contraseña son incorrectas.', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

  redireccionar(): void {
    this._snackBar.open('Mostrar Dashboard.', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

  fakeLoading(): void {
    this.loading = true;

    setTimeout(() => {
      // redireccionar al dashboard
      this.router.navigate(['dashboard']);
    }, 1500);
  }

}
