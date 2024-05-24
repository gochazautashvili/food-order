"use server";

import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const UpdateProductQuantity = async (
  id: number,
  quantity: number,
  productId: number
) => {
  const { userId } = auth();

  if (!userId) return { error: "User Is Now Defined" };

  try {
    const existProduct = await db.cart.findFirst({
      where: { id },
    });

    const product = await db.products.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return { error: "Invalid Product" };
    }

    if (existProduct?.userId !== userId) {
      return { error: "This Is Not You Or Something Went Wrong!" };
    }

    await db.cart.update({
      where: { id: existProduct.id },
      data: { quantity, price: Number(product.price) * quantity },
    });

    revalidatePath("/");
    return { success: "Success" };
  } catch (error) {
    return { error: "Something Went Wrong!" };
  }
};
