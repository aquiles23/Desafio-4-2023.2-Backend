import { mysqlConn } from "../base/mysql";

interface Multa {
  valor: number;
  data: string | Date;
  pontos: number;
  tipo: string;
  placa_carro?: string | undefined;
}

export const createMulta = async (body: Multa): Promise<any> =>
  await mysqlConn.execute("INSERT into INFRACAO(valor, data, pontos, tipo, placa_carro) values(?,?,?,?,?)", [
    body.valor,
    body.data,
    body.pontos,
    body.tipo,
    body.placa_carro,
  ]);
