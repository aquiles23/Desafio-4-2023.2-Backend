import { mysqlConn } from "../base/mysql";
import { multaSchema, multasRetidasSchema } from "../schemas/multa";

interface Multa {
  valor: number | string;
  data: string | Date;
  pontos: number | string;
  tipo: string;
  placa_carro?: string | undefined;
}

export const createMulta = async (body: Multa): Promise<any> =>
  await mysqlConn.execute(
    `INSERT into INFRACAO
    (valor
        , data
        , pontos
        , tipo
        , placa_carro) 
    values(?,?,?,?,?)`,
    [body.valor, body.data, body.pontos, body.tipo, body.placa_carro],
  );

export const multaPorMotorista = async (cpf: string): Promise<any> =>
  multaSchema.array().parse(
    await mysqlConn.query(
      `SELECT i.valor, i.data, i.pontos, i.tipo 
        from  INFRACAO i
        inner join VEICULO v on (i.placa_carro = v.placa)
        inner join PROPRIETARIO p on (v.cpf_motorista = p.cpf)
        where p.cpf = ?`,
      [cpf],
    ),
  );

export const multasRetidas = async (): Promise<any> =>
  multasRetidasSchema.array().parse(
    await mysqlConn.query(
      `SELECT p.nome, sum(i.pontos) pontos
                        from  INFRACAO i
                        inner join VEICULO v on (i.placa_carro = v.placa)
                        inner join PROPRIETARIO p on (v.cpf_motorista = p.cpf)
                        group by p.nome
                        having sum(i.pontos) >= 10`,
      [],
    ),
  );
