import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ListagemEventoComponent } from './listagem-evento/listagem-evento.component';



@NgModule({
  declarations: [
    CadastroEventoComponent,
    ListagemEventoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventoModule { }
