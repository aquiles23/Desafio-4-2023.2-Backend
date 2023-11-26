import Routes from "express";
import { motoristaSchema } from "../schemas/motorista";
import { carroSchema } from "../schemas/carro";
import { createMotorista, allMotoristas } from "../repositories/motorista";
import { createCarro } from "../repositories/carro";
// import { createCarro } from "../repositories/carro";

const apiRoutes = Routes();

apiRoutes.post("/motorista", async (req, res) => {
  const body = motoristaSchema.parse(req.body);
  await createMotorista(body);
  res.send(201);
});

apiRoutes.get("/motorista", async (req, res) => {
  res.status(200).json(await allMotoristas());
});

apiRoutes.post("/carro", async (req, res) => {
  const body = carroSchema.parse(req.body);
  await createCarro(body);
  res.send(201);
});

apiRoutes.post("/multa", () => {});
export default apiRoutes;
