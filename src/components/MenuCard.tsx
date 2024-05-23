import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ProductType } from "@/types/types";
import AddCartButton from "./ui/AddCartButton";

const MenuCard = ({ id, title, description, price, image }: ProductType) => {
  return (
    <div className="border border-[rgba(53,184,190,0.5)] p-6 bg-white rounded minLaptop:flex minLaptop:items-center">
      <Link href={`/order/single-product/${id}`}>
        <div className="minLaptop:w-[120px] minLaptop:h-[120px]">
          <Image
            className="w-full rounded minLaptop:w-[120px] minLaptop:h-[120px] bg-slate-400"
            src={image}
            alt="menu"
            width={232}
            height={232}
          />
        </div>
      </Link>
      <div className="minLaptop:ml-[30px]">
        <div className="flex flex-col items-start minLaptop:flex-row minLaptop:justify-between">
          <Link
            href={`/order/single-product/${id}`}
            className="text-xl font-bold text-[#08090a] mt-5 mb-[10px] minLaptop:mt-0"
          >
            {title}
          </Link>
          <p className="text-brand">$ {price} USD</p>
        </div>
        <p className="text-[#546285] mt-[10px] mb-5 minLaptop:mb-[10px] minLaptop:mt-0 text-start">
          {description.slice(0, 90)}...
        </p>
        <AddCartButton id={id} />
      </div>
    </div>
  );
};

export default MenuCard;
