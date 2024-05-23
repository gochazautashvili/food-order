"use server";

import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const AddInCart = async (productId: number, quantity: number) => {
  const { userId } = await auth();

  if (!userId) {
    return { error: "You Need Account!" };
  }

  const product = await db.products.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return { error: "Invalid Product" };
  }

  try {
    const existProduct = await db.cart.findFirst({
      where: { productId },
    });

    if (existProduct && existProduct.userId === userId) {
      await db.cart.update({
        where: { id: existProduct.id },
        data: {
          quantity: existProduct.quantity + quantity,
          price: (
            Number(product.price) *
            (existProduct.quantity + quantity)
          ).toString(),
        },
      });

      revalidatePath("/");
      return { success: "Product Added In To Cart" };
    }

    await db.cart.create({
      data: {
        title: product.title,
        price: (Number(product.price) * quantity).toString(),
        image: product.image,
        productId: product.id,
        userId: userId,
        quantity,
      },
    });

    revalidatePath("/");
    return { success: "Product Added In To Cart" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
