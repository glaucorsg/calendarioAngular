import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Evento} from "../model/evento";
import {from, Observable} from "rxjs";
import {Usuario} from "../model/usuario";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventoFirestoreService {

  colecaoEventos: AngularFirestoreCollection<Evento>;
  NOME_COLECAO_EVENTOS = 'eventos';

  constructor(private afs: AngularFirestore) {
    this.colecaoEventos = afs.collection(this.NOME_COLECAO_EVENTOS);
  }

  listar(): Observable<Evento[]>{
    return this.colecaoEventos.valueChanges({idField: 'id'});
  }

  inserir(evento: Evento): Observable<Object>{
    delete evento.id;
    return from(this.colecaoEventos.add(Object.assign({}, evento)));
  }

  remover(id: string): Observable<void>{
    return from(this.colecaoEventos.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Evento>{
    return this.colecaoEventos.doc(id).get().pipe(map(document =>
      new Evento(document.id, document.data())));
  }

  atualizar(evento: Evento): Observable<void>{
    delete evento.id;
    return from(this.colecaoEventos.doc(evento.id).update(Object.assign({},evento)));
  }
}
