import Routes from "express";
import { motoristaSchema } from "../schemas/motorista";
import { carroSchema } from "../schemas/carro";
import { createMotorista, allMotoristas } from "../repositories/motorista";
import { carrosPorMotorista, createCarro } from "../repositories/carro";
import { multaSchema } from "../schemas/multa";
import { createMulta } from "../repositories/multa";

const apiRoutes = Routes();

/// MOTORISTA /////
apiRoutes.post("/motorista", async (req, res) => {
  const body = motoristaSchema.parse(req.body);
  await createMotorista(body);
  res.send(201);
});

apiRoutes.get("/motorista", async (req, res) => {
  res.status(200).json(await allMotoristas());
});

///  CARRO ////
apiRoutes.post("/carro", async (req, res) => {
  const body = carroSchema.parse(req.body);
  await createCarro(body);
  res.send(201);
});

apiRoutes.get("/carro/:cpf", async (req, res) => {
  res.status(200).json(await carrosPorMotorista(req.params.cpf));
});

/// MULTA /////
apiRoutes.post("/multa", async (req, res) => {
  const body = multaSchema.parse(req.body);
  await createMulta(body);
  res.send(201);
});
export default apiRoutes;
