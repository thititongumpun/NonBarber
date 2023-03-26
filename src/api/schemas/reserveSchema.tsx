import { z } from "zod";

export const reserveSchema = z.object({
  discount: z.string().optional().transform(Number),
  reserveDate: z.date(),
  reserveTime: z.string(),
});

export type ReserveSchemaType = z.infer<typeof reserveSchema>;
