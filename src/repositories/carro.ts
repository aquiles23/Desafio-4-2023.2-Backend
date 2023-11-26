import { mysqlConn } from "../base/mysql";

interface Carro {
  placa: string;
  marca: string;
  modelo: string;
  ano: number | string;
  cor: string;
  cpf_motorista: string;
}

export const createCarro = async (body: Carro) =>
  await mysqlConn.execute(
    "INSERT into VEICULO(placa, marca, modelo, ano, cor, cpf_motorista) values(?,?,?,?,?,?)",
    [body.placa, body.marca, body.modelo, body.ano, body.cor, body.cpf_motorista],
  );
