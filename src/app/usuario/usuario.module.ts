import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';



@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    ListagemUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
