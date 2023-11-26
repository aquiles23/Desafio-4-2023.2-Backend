import { z } from "zod";

export const multaSchema = z.object({
  valor: z.coerce.number(),
  data: z.union([z.date(), z.string()]),
  pontos: z.number(),
  tipo: z.string().max(500),
  placa_carro: z.string().max(30).optional(),
});

export const multasRetidasSchema = z.object({
  nome: z.string().max(500),
  pontos: z.coerce.number().min(10),
});
