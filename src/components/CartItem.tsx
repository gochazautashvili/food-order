"use client";
import { DeleteCartItemById } from "@/actions/DeleteCartItem";
import { UpdateProductQuantity } from "@/actions/UpdateProductQuantity";
import { CartPropsType } from "@/types/types";
import Image from "next/image";
import { ChangeEvent, useOptimistic, useTransition } from "react";
import { toast } from "react-toastify";

const CartItem = ({
  id,
  title,
  price,
  image,
  quantity,
  productId,
}: CartPropsType) => {
  const [isPending, startTransition] = useTransition();
  const [isPendingOP, startTransitionOP] = useTransition();
  const [quantityOP, setQuantityOP] = useOptimistic(
    quantity,
    (state, newQuantity: number) => (state = newQuantity)
  );
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

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(e.currentTarget.value);
    startTransitionOP(() => {
      setQuantityOP(quantity);
    });
    UpdateProductQuantity(id, quantity, productId).then((res) => {
      if (res.error) toast.error(res.error);
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
          <p className="text-[#333333] text-sm ">$ {price * quantityOP} USD</p>
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
          onChange={handleChangeQuantity}
          value={quantityOP}
          min={1}
        />
      </div>
    </div>
  );
};

export default CartItem;
