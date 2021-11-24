import {Component} from '@angular/core';
import {Evento} from "./shared/model/evento";
import {Usuario} from "./shared/model/usuario";

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calendário de eventos científicos';
  usuario: Usuario;
  usuarios: Array<Usuario>;
  evento: Evento;
  eventos: Array<Evento>;

  constructor() {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();

    this.evento = new Evento();
    this.eventos = new Array<Evento>();
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }

  inserirEvento(): void{
    this.eventos.push(this.evento);
    this.evento = new Evento();
  }
}
