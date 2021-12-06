import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Usuario} from "../model/usuario";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO_USUARIOS = 'usuarios';

  constructor(private afs: AngularFirestore) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO_USUARIOS);
  }

  listar(): Observable<Usuario[]>{
    return this.colecaoUsuarios.valueChanges({idField: 'id'});
  }

  inserir(usuario: Usuario): Observable<Object>{
    delete usuario.id;
    return from(this.colecaoUsuarios.add(Object.assign({}, usuario)));
  }

  remover(id: string): Observable<void>{
    return from(this.colecaoUsuarios.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Usuario>{
    return this.colecaoUsuarios.doc(id).get().pipe(map(document =>
      new Usuario(document.id, document.data())));
  }

  atualizar(usuario: Usuario): Observable<void>{
    delete usuario.id;
    return from(this.colecaoUsuarios.doc(usuario.id).update(Object.assign({},usuario)));
  }
}
