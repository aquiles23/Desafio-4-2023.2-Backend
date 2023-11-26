import { z } from "zod";

export const multaSchema = z.object({
  valor: z.number(),
  data: z.union([z.date(), z.string()]),
  pontos: z.number(),
  tipo: z.string().max(500),
  placa_carro: z.string().max(30),
});
