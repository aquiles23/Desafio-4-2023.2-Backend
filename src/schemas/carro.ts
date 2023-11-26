import { z } from "zod";

export const carroSchema = z.object({
  placa: z.string().max(30),
  marca: z.string().max(500),
  modelo: z.string().max(500),
  ano: z.number().min(1000),
  cor: z.string().max(200),
  cpf_motorista: z.string().max(30).optional(),
});
