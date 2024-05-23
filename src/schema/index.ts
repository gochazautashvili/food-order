import { z } from "zod";

export const ProductSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  price: z.string(),
  information: z.string().min(2),
  reviews: z.string().min(2),
  type: z.string().min(2),
  image: z.string(),
});
