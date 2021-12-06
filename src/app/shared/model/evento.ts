export class Evento{

  id?: string;
  titulo?:string;
  data?: string; //possivelmente migrará para tipo data
  local?:string;
  tags?:Array<string>;

  constructor(id?: string, evento: Evento = {} ){
    this.id = id;
    this.titulo = evento.titulo;
    this.data = evento.data;
    this.local = evento.local;
    this.tags = evento.tags;
  }
}
