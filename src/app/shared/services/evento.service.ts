import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Evento} from "../model/evento";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  URL_EVENTOS = 'http://localhost:3000/eventos';

  constructor(private httpClient: HttpClient) {
  }

  listarEventos(): Observable<Evento[]>{
    // @ts-ignore
    return this.httpClient.get<Evento[]>(this.URL_EVENTOS).pipe(catchError(erro => {
      console.log('Erro de carregamento', erro);
      return(undefined);
    }));
  }

  inserirEvento(evento: Evento): Observable<Evento>{
    return this.httpClient.post<Evento>(this.URL_EVENTOS, evento);
  }

  removerEvento(id: number): Observable<object>{
    return this.httpClient.delete(`${this.URL_EVENTOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Evento> {
    return this.httpClient.get<Evento>(`${this.URL_EVENTOS}/${id}`);
  }

  atualizarEvento(evento: Evento): Observable<Evento>{
    return this.httpClient.put<Evento>(`${this.URL_EVENTOS}/${evento.id}`, evento);
  }
}
