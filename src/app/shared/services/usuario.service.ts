import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Usuario} from "../model/usuario";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = 'http://localhost:8080/usuarios';


  constructor(private httpClient: HttpClient) {

  }

  listarUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }


  inserirUsuario(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  removerUsuario(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_USUARIOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  atualizarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  }
}
