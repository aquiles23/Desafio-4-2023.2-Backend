import { mysqlConn } from "../base/mysql";

export interface Motorista {
  cpf: string;
  nome: string;
  vencimento_cnh: string;
  categoria_cnh: string;
}

export const createMotorista = async (body: Motorista): Promise<any> =>
  mysqlConn.execute(
    "insert into PROPRIETARIO(cpf, nome_completo, vencimento_cnh, categoria_cnh) values(?,?,?,?)",
    [body.cpf, body.nome, body.vencimento_cnh, body.categoria_cnh],
  );
