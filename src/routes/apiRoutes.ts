import Routes from "express";
import { motoristaSchema } from "../schemas/motorista";
import { createMotorista } from "../repositories/motorista";
//import { createCarro } from "../repositories/carro";

const apiRoutes = Routes();

apiRoutes.post("/motorista", async (req, res) => {
  const body = motoristaSchema.parse(req.body);
  await createMotorista(body);
  res.send(201);
});

apiRoutes.post("/carro", () => {});

apiRoutes.post("/multa", () => {});
export default apiRoutes;
