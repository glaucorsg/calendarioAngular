import { Component, OnInit } from '@angular/core';
import {Evento} from "../../shared/model/evento";
import {EventoService} from "../../shared/services/evento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EventoFirestoreService} from "../../shared/services/evento-firestore.service";
import {MensagemService} from "../../shared/services/mensagem.service";

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss']
})
export class CadastroEventoComponent implements OnInit {

  evento: Evento;

  operacaoCadastro = true;

  constructor(private eventoservice: EventoService, private rotaAtual: ActivatedRoute,
              private roteador: Router, private mensagemService: MensagemService) {
    this.evento = new Evento();
    if (this.rotaAtual.snapshot.paramMap.has('id')){
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.eventoservice.pesquisarPorId(idParaEdicao).subscribe(
        eventoRetornado => this.evento = eventoRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirEvento(): void{
    if (this.evento.id){
      this.eventoservice.atualizarEvento(this.evento).subscribe(
        eventoAlterado => {
          console.log(eventoAlterado);
          this.mensagemService.warning(`Evento ${eventoAlterado.titulo} alterado com sucesso`);
          this.roteador.navigate(['listareventos']);
        }
      );
    } else {
      this.eventoservice.inserirEvento(this.evento).subscribe(
        eventoInserido => {
          console.log(eventoInserido);
          this.mensagemService.success(`Evento ${eventoInserido.titulo} inserido com sucesso`);
          this.roteador.navigate(['listareventos']);
        }
      );
    }
  }
}
