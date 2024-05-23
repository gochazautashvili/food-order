"use server";

import db from "@/lib/db";
import { ProductSchema } from "@/schema";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

export const UploadProduct = async (data: z.infer<typeof ProductSchema>) => {
  const { userId } = auth();

  if (!userId) return { error: "You Have Not Account" };

  const validData = ProductSchema.safeParse(data);

  if (!validData.success) {
    return { error: "Invalid Data!" };
  }

  try {
    await db.products.create({
      data: {
        ...data,
      },
    });

    return { success: "Product Created!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
