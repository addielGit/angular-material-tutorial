import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ANGULAR MATERIAL
// import { MatSliderModule } from '@angular/material/slider';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// CCOMPONENTS
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
