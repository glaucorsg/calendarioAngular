export class Usuario{

  id?: number;
  nome?: string;
  cpf?: string;
  interesses?: Array<string>;

  constructor(id?: number, usuario: Usuario = {}) {
    this.id = id;
    this.nome = usuario.nome;
    this.cpf = usuario.cpf;
    this.interesses = usuario.interesses;
}
}
