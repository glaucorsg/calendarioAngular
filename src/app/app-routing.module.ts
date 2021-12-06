import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroEventoComponent} from "./evento/cadastro-evento/cadastro-evento.component";
import {ListagemEventoComponent} from "./evento/listagem-evento/listagem-evento.component";
import {CadastroUsuarioComponent} from "./usuario/cadastro-usuario/cadastro-usuario.component";
import {ListagemUsuarioComponent} from "./usuario/listagem-usuario/listagem-usuario.component";
import {ListagemUsuarioTabelaComponent} from "./usuario/listagem-usuario-tabela/listagem-usuario-tabela.component";
import {ListagemEventoTabelaComponent} from "./evento/listagem-evento-tabela/listagem-evento-tabela.component";

const routes: Routes = [
  {
    path: 'cadastrarevento',
    component: CadastroEventoComponent
  },
  {
    path: 'cadastrarevento/:id',
    component:CadastroEventoComponent
  },
  {
    path: 'listareventos',
    component: ListagemEventoComponent
  },
  {
    path: 'cadastrarusuario',
    component: CadastroUsuarioComponent
  },
  {
    path:'cadastrarusuario/:id',
    component: CadastroUsuarioComponent
  },
  {
    path:'listarusuarios',
    component: ListagemUsuarioComponent
  },
  {
    path:'tabelausuarios',
    component: ListagemUsuarioTabelaComponent
  },
  {
    path:'tabelaeventos',
    component: ListagemEventoTabelaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
