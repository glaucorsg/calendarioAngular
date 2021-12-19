import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Evento} from "../../shared/model/evento";
import {EventoFirestoreService} from "../../shared/services/evento-firestore.service";
import {EventoService} from "../../shared/services/evento.service";

@Component({
  selector: 'app-listagem-evento',
  templateUrl: './listagem-evento.component.html',
  styleUrls: ['./listagem-evento.component.scss']
})
export class ListagemEventoComponent implements OnInit {

  eventos!: Array<Evento>;

  constructor(private eventoservice: EventoService, private roteador: Router) {
  }


  ngOnInit(): void {
    this.eventoservice.listarEventos().subscribe(
      eventos => this.eventos = eventos
    );
  }

  editar(evento: Evento): void {
    this.roteador.navigate(['cadastrarevento', evento.id]);
  }

  remover(evento: Evento): void {
    this.eventoservice.removerEvento(Number(evento.id)).subscribe(
      resposta => {
        const indxEventoARemover = this.eventos.findIndex(e => e.titulo == evento.titulo);
        if (indxEventoARemover > -1) {
          this.eventos.splice(indxEventoARemover, 1);
        }
      }
    );
  }
}


