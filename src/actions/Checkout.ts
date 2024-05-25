"use server";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const Checkout = async () => {
  const { userId } = auth();

  if (!userId) return { error: "User Can Not Defined" };

  const product = await db.cart.findMany({
    where: {
      userId,
    },
  });

  if (!product) return { error: "Cart Is Empty" };

  try {
    const res = await fetch("https://food-order-vibe.vercel.app/api/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    return { success: "Success", url: data };
  } catch (error) {
    return { error: "Something Went Wrong!" };
  }
};
