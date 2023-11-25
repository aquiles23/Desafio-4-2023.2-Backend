import { z } from "zod";

export const motoristaSchema = z.object({
  cpf: z.string().max(12),
  nome: z.string(),
  vencimento_cnh: z.string(),
  categoria_cnh: z.string().max(2),
});
