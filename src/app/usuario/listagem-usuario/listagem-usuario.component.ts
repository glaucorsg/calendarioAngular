import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {Router} from "@angular/router";
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";
import {UsuarioService} from "../../shared/services/usuario.service";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios!: Array<Usuario>;

  constructor(private usuarioservice: UsuarioService, private roteador: Router) { }

  ngOnInit(): void {
    this.usuarioservice.listarUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  editar(usuario: Usuario): void{
    this.roteador.navigate(['cadastrarusuario', usuario.id]);
  }

  remover(usuario: Usuario): void{
    this.usuarioservice.removerUsuario(Number(usuario.id)).subscribe(
      resposta => {
        const indxUsuarioARemover = this.usuarios.findIndex(u => u.cpf == usuario.cpf);
        if(indxUsuarioARemover > -1){
          this.usuarios.splice(indxUsuarioARemover, 1);
        }
      }
    );
  }
}
