import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Usuario} from "../../shared/model/usuario";
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";


@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.scss']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

  dataSource!: MatTableDataSource<Usuario>;
  mostrarColunas = ['nome', 'cpf', 'interesses', 'acoes'];

  constructor(private usuarioservice: UsuarioFirestoreService) { }

  ngOnInit(): void {
    this.usuarioservice.listar().subscribe(
      usuarios => this.dataSource = new MatTableDataSource(usuarios)
    );
  }

  apagar(id: string): void {
    this.usuarioservice.remover(id).subscribe(
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
