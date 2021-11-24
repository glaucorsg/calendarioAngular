export class Evento{
  id!: number;
  titulo!:string;
  data!: Date; //possivelmente migrará para tipo data
  local!:string;
  tags!:Array<string>;
}
