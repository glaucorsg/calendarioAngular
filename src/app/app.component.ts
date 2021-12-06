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

  constructor() {
  }
}
