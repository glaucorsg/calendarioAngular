import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListagemUsuarioTabelaComponent } from './listagem-usuario-tabela/listagem-usuario-tabela.component';
import {MatTableModule} from "@angular/material/table";
import {PipesModule} from "../shared/pipes/pipes.module";



@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    ListagemUsuarioComponent,
    ListagemUsuarioTabelaComponent
  ],

  exports: [
    ListagemUsuarioComponent,
    CadastroUsuarioComponent,
    ListagemUsuarioTabelaComponent
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
export class UsuarioModule { }
