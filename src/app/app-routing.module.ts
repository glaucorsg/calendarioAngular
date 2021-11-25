import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroEventoComponent} from "./evento/cadastro-evento/cadastro-evento.component";
import {ListagemEventoComponent} from "./evento/listagem-evento/listagem-evento.component";
import {CadastroUsuarioComponent} from "./usuario/cadastro-usuario/cadastro-usuario.component";
import {ListagemUsuarioComponent} from "./usuario/listagem-usuario/listagem-usuario.component";

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
    path: 'listarevento',
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
    path:'listarusuario',
    component: ListagemUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
