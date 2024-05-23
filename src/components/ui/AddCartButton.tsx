"use client";
import { AddInCart } from "@/actions/AddCart";
import { Button } from "./button";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";

const AddCartButton = ({ id }: { id: number }) => {
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const handleAddCart = () => {
    startTransition(() => {
      AddInCart(id, quantity).then((res) => {
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
    <div className="flex gap-3">
      <input
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-[60px] h-[45px] rounded pl-3 bg-[#fafafa] border border-[#ddd]"
        type="number"
        title="number"
        defaultValue={1}
        min={1}
      />
      <Button
        disabled={isPending}
        onClick={handleAddCart}
        className="bg-brand rounded hover:bg-brand h-[45px]"
      >
        {isPending ? "Loading..." : "add to Cart"}
      </Button>
    </div>
  );
};

export default AddCartButton;
