"use server";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const getProduct = async (query: string, page: number) => {
  const product = await db.products.findMany({
    where: {
      type: query,
    },
    skip: 8 * page,
    take: 8,
  });

  return product;
};

export const getSingleProductById = async (id: number) => {
  const product = await db.products.findUnique({
    where: { id },
  });

  return product;
};

export const getUserCartProduct = async () => {
  const { userId } = await auth();

  if (!userId) return { error: "Invalid User" };

  try {
    const products = await db.cart.findMany({
      where: {
        userId,
      },
    });

    return { products: products };
  } catch (error) {
    return { error: "error" };
  }
};
