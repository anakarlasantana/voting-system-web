export interface IUser {
  id: number;
  cpf: string;
  name: string;
}

export interface IToken {
  access: string;
  refresh: string;
}
