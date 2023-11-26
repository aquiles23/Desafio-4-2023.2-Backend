import { mysqlConn } from "../base/mysql";
import { carroSchema } from "../schemas/carro";

interface Carro {
  placa: string;
  marca: string;
  modelo: string;
  ano: number | string;
  cor: string;
  cpf_motorista?: string | undefined;
}

export const createCarro = async (body: Carro) =>
  await mysqlConn.execute(
    "INSERT into VEICULO(placa, marca, modelo, ano, cor, cpf_motorista) values(?,?,?,?,?,?)",
    [body.placa, body.marca, body.modelo, body.ano, body.cor, body.cpf_motorista],
  );

export const carrosPorMotorista = async (cpf: string) =>
  carroSchema
    .array()
    .parse(
      await mysqlConn.query("SELECT placa, marca, modelo, ano, cor from VEICULO where cpf_motorista = ?", [
        cpf,
      ]),
    );
