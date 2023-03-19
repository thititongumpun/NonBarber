import { z } from "zod";

export const reserveSchema = z.object({
  discount: z.string(),
  reserveDate: z.date().optional(),
  reserveTime: z.string().datetime().optional(),
});

export type ReserveSchemaType = z.infer<typeof reserveSchema>;
