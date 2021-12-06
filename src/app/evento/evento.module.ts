import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ListagemEventoComponent } from './listagem-evento/listagem-evento.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListagemEventoTabelaComponent } from './listagem-evento-tabela/listagem-evento-tabela.component';
import {MatTableModule} from "@angular/material/table";
import {PipesModule} from "../shared/pipes/pipes.module";

@NgModule({
  declarations: [
    CadastroEventoComponent,
    ListagemEventoComponent,
    ListagemEventoTabelaComponent
  ],

  exports: [
    ListagemEventoComponent,
    CadastroEventoComponent,
    ListagemEventoTabelaComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexModule,
    MatTableModule,
    PipesModule
  ]
})
export class EventoModule { }
