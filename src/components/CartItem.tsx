"use client";
import { DeleteCartItemById } from "@/actions/DeleteCartItem";
import { CartPropsType } from "@/types/types";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "react-toastify";

const CartItem = ({ id, title, price, image, quantity }: CartPropsType) => {
  const [isPending, startTransition] = useTransition();

  const handleDeleteItem = () => {
    startTransition(() => {
      DeleteCartItemById(id).then((res) => {
        if (res.error) {
          toast.error(res.error);
        }
        if (res.success) {
          toast.success(res.success);
        }
      });
    });
  };

  return (
    <div
      className={`flex py-3 items-center justify-between ${
        isPending ? "animate-pulse" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <Image
          className="rounded bg-gray-500"
          src={image}
          alt="cart-img"
          width={60}
          height={60}
        />
        <div>
          <h1 className="text-[#333333] text-sm font-bold">{title}</h1>
          <p className="text-[#333333] text-sm ">$ {price} USD</p>
          <button
            disabled={isPending}
            onClick={handleDeleteItem}
            className="text-coral text-sm cursor-pointer"
          >
            {isPending ? "Removing..." : "Remove"}
          </button>
        </div>
      </div>
      <div>
        <input
          className="w-[60px] h-9 border-gray-400 border outline-none pl-2 bg-[#fafafa] rounded"
          type="number"
          title="quantity"
          defaultValue={quantity}
          min={1}
        />
      </div>
    </div>
  );
};

export default CartItem;
