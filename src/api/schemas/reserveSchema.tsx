import { z } from "zod";

export const reserveSchema = z.object({
  discount: z.string(),
  reserveDate: z.date().optional(),
  reserveTime: z.string().datetime().optional(),
  createdDate: z.string().datetime().optional(),
  userId: z.string()
});

export type ReserveSchemaType = z.infer<typeof reserveSchema>;