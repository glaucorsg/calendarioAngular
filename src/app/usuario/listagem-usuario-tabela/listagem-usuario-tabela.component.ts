import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Usuario} from "../../shared/model/usuario";
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";
import {UsuarioService} from "../../shared/services/usuario.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.scss']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

  dataSource!: MatTableDataSource<Usuario>;
  mostrarColunas = ['nome', 'cpf', 'interesses', 'acoes'];

  constructor(private usuarioservice: UsuarioService, private roteador: Router) { }

  ngOnInit(): void {
    this.usuarioservice.listarUsuarios().subscribe(
      usuarios => this.dataSource = new MatTableDataSource(usuarios)
    );
  }

  apagar(id: number): void {
    this.usuarioservice.removerUsuario(id).subscribe(
      apagado => {
        const indx = this.dataSource.data.findIndex(usuario => usuario.id === id);
        if (indx > -1) {
          this.dataSource.data.splice(indx, 1);
          this.dataSource = new MatTableDataSource<Usuario>(this.dataSource.data);
        }
      }
    )
  }

}
