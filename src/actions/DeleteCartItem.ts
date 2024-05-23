"use server";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const DeleteCartItemById = async (id: number) => {
  const { userId } = auth();

  if (!userId) return { error: "You Have Not Account!" };

  try {
    await db.cart.delete({
      where: { id },
    });

    revalidatePath("/");
    return { success: "Item Is Deleted" };
  } catch (error) {
    return { error: "Something Went Wrong!" };
  }
};
