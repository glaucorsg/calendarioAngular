import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Evento} from "../../shared/model/evento";
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
    this.roteador.navigate(['cadastrarEvento', evento.id]);
  }

  remover(evento: Evento): void {
    this.eventoservice.removerEvento(evento.id).subscribe(
      resposta => {
        const indxEventoARemover = this.eventos.findIndex(e => e.titulo == evento.titulo);
        if (indxEventoARemover > -1) {
          this.eventos.splice(indxEventoARemover, 1);
        }
      }
    );
  }
}


