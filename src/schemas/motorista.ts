import { z } from "zod";

export const motoristaSchema = z.object({
  cpf: z.string().max(12),
  nome: z.string().max(500),
  vencimento_cnh: z.union([z.string(), z.date()]),
  categoria_cnh: z.union([
    z.literal("A"),
    z.literal("B"),
    z.literal("AB"),
    //, z.literal("D"), z.literal("E")
  ]),
});
