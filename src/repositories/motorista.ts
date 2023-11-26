import { mysqlConn } from "../base/mysql";
import { motoristaSchema } from "../schemas/motorista";

interface Motorista {
  cpf: string;
  nome: string;
  vencimento_cnh: string | Date;
  categoria_cnh: string;
}

export const createMotorista = async (body: Motorista): Promise<any> =>
  await mysqlConn.execute(
    "INSERT into PROPRIETARIO(cpf, nome, vencimento_cnh, categoria_cnh) values(?,?,?,?)",
    [body.cpf, body.nome, body.vencimento_cnh, body.categoria_cnh],
  );

export const allMotoristas = async () =>
  motoristaSchema
    .array()
    .parse(await mysqlConn.query("SELECT cpf, nome, vencimento_cnh, categoria_cnh from PROPRIETARIO"));
