export class Usuario{

  id?: string;
  nome?: string;
  cpf?: string;
  interesses?: Array<string>;

  constructor(id?: string, usuario: Usuario = {}) {
    this.id = id;
    this.nome = usuario.nome;
    this.cpf = usuario.cpf;
    this.interesses = usuario.interesses;
}
}
