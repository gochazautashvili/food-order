"use client";
import { ShoppingCart } from "lucide-react";
import { MouseEvent, useState, useTransition } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartPropsType } from "@/types/types";
import dynamic from "next/dynamic";
import { Checkout } from "@/actions/Checkout";
import { toast } from "react-toastify";
const CartItem = dynamic(() => import("./CartItem"), {
  ssr: false,
  loading: () => <h1>Loading...</h1>,
});

const Cart = ({ products }: { products: CartPropsType[] | undefined }) => {
  const [cart, setCart] = useState(false);
  const [isPending, startTransition] = useTransition();
  const handelExitCart = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "menu-wrapper") {
      setCart(false);
    }
  };

  let totalPrice = 0;

  if (products) {
    for (let i = 0; i < products.length; i++) {
      totalPrice += Number(products[i].price) * products[i].quantity;
    }
  }

  const handleCheckout = () => {
    startTransition(() => {
      Checkout().then((res) => {
        if (res.error) toast.error(res.error);

        if (res.success) window.location = res?.url;
      });
    });
  };

  return (
    <div>
      <button
        onClick={() => setCart(true)}
        className="p-3 bg-brand bg-svg rounded relative"
        title="cart"
        type="button"
      >
        <span className="absolute -top-2 -right-2 shadow-sm w-6 h-6 text-sm rounded-3xl bg-white text-brand flex justify-center items-center">
          {products?.length || 0}
        </span>
        <ShoppingCart color="white" />
      </button>
      <div
        id="menu-wrapper"
        onClick={handelExitCart}
        className={`fixed z-40 ${
          cart ? "right-0" : "right-[-100%]"
        } top-0 w-full h-screen bg-[rgba(3,5,6,0.7)] transition-all duration-500`}
      ></div>
      <div
        className={`fixed z-50 ${cart ? "right-0" : "right-[-100%]"} ${
          cart ? "opacity-100" : "opacity-0"
        } top-0 w-[70%] flex-col flex justify-between desktop:w-[30%] h-full bg-white transition-all duration-1000`}
      >
        <div>
          <div className="py-4 px-6 flex justify-between items-center">
            <h1 className="text-heading text-[28px] font-bold leading-[1.1]">
              Your Order
            </h1>
            <button onClick={() => setCart(false)} type="button" title="exit">
              <X />
            </button>
          </div>
          <hr className="w-full" />
        </div>
        <div className="py-4 px-6 flex flex-col h-full overflow-auto flex-grow">
          {products?.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                productId={item.productId}
                price={item.price}
                title={item.title}
                image={item.image}
                quantity={item.quantity}
              />
            );
          })}
        </div>
        <div>
          <hr className="w-full" />
          <div className="py-4 px-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-[#7e828f]">Subtotal</h1>
              <h1 className="text-[#191b22] font-bold">
                $ {totalPrice.toFixed(2)} USD
              </h1>
            </div>
            <Button
              onClick={handleCheckout}
              className="bg-brand w-full h-[45px] rounded text-sm hover:bg-brand"
            >
              {isPending ? "Loading..." : "Continue to Checkout"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
