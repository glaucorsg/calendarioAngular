import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {EventoService} from "../../shared/services/evento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../shared/services/usuario.service";
import {Evento} from "../../shared/model/evento";
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;

  operacaoCadastro = true;

  constructor(private usuarioservice: UsuarioService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.usuario = new Usuario();
    if (this.rotaAtual.snapshot.paramMap.has('id')){
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.usuarioservice.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.usuario = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {
    if (this.usuario.id){
      this.usuarioservice.atualizarUsuario(this.usuario).subscribe(
        usuarioAlterado => {
          console.log(usuarioAlterado);
          this.roteador.navigate(['listarusuarios']);
        }
      );
    } else {
      this.usuarioservice.inserirUsuario(this.usuario).subscribe(
        usuarioInserido => {
          console.log(usuarioInserido);
          this.roteador.navigate(['listarusuarios']);
        }
      )
    }
  }
}
