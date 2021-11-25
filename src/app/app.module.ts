import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from "@angular/flex-layout";
import {LayoutModule} from "./layout/layout.module";
import {EventoService} from "./shared/services/evento.service";
import {UsuarioModule} from "./usuario/usuario.module";
import {HttpClientModule} from "@angular/common/http";
import {EventoModule} from "./evento/evento.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    FlexModule,
    EventoModule,
    UsuarioModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
