import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Evento} from "../../shared/model/evento";
import {EventoFirestoreService} from "../../shared/services/evento-firestore.service";
import {EventoService} from "../../shared/services/evento.service";
import {Router} from "@angular/router";
import {MensagemService} from "../../shared/services/mensagem.service";

@Component({
  selector: 'app-listagem-evento-tabela',
  templateUrl: './listagem-evento-tabela.component.html',
  styleUrls: ['./listagem-evento-tabela.component.scss']
})

export class ListagemEventoTabelaComponent implements OnInit {

  dataSource!: MatTableDataSource<Evento>;
  mostrarColunas = ['titulo', 'data', 'local', 'tags', 'acoes'];

  constructor(private eventoservice: EventoService, private roteador: Router,
              private mensagemService: MensagemService) {

  }

  ngOnInit(): void {
    this.eventoservice.listarEventos().subscribe(
      eventos => this.dataSource = new MatTableDataSource(eventos)
    );
  }

    apagar(id: string): void {
      this.eventoservice.removerEvento(Number(id)).subscribe(
        apagado => {
          const indx = this.dataSource.data.findIndex(evento => evento.id === id);
          if (indx > -1) {
            this.dataSource.data.splice(indx, 1);
            this.dataSource = new MatTableDataSource<Evento>(this.dataSource.data);
            this.mensagemService.info(`Evento excluído`);

          }
        }
      )
    }

  editar(evento: Evento): void {
    this.roteador.navigate(['cadastrarevento', evento.id]);
  }
}

