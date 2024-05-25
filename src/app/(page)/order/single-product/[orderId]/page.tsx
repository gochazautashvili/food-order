import BrowseMenu from "@/components/BrowseMenu";
import Hero from "@/components/Hero";
import Support from "@/components/Support";
import AddCartButton from "@/components/ui/AddCartButton";
import LinkButton from "@/components/ui/LinkButton";
import { getSingleProductById } from "@/data/product";
import Image from "next/image";

type Params = {
  params: {
    orderId: string;
  };
  searchParams: {
    q: string;
  };
};

const page = async ({ params, searchParams }: Params) => {
  const content = (
    <p className="relative z-10 tablet:text-6xl text-5xl font-bold leading-[1] text-[#191b22] text-center">
      Burger Dreams
    </p>
  );
  const product = await getSingleProductById(Number(params.orderId));

  if (!product) return <h1>Product Is Defined</h1>;

  return (
    <main>
      <Hero text={content} />
      <section className="minLaptop:flex gap-x-10 w-full max-w-[1200px] mx-auto px-4 py-[50px] minLaptop:py-[100px]">
        <div>
          <Image
            className="rounded-3xl object-cover w-full bg-gray-500"
            src={product?.image}
            alt="burger"
            width={701}
            height={701}
          />
        </div>
        <div className="minLaptop:w-1/2">
          <div>
            <h1 className="mt-8 mb-2 minLaptop:mt-0 font-bold text-[40px] text-[#191b22]">
              {product?.title}
            </h1>
            <p className="font-bold text-brand text-[22px]">
              $ {product?.price} USD
            </p>
          </div>
          <hr className="w-full h-[1px] bg-brand my-[30px]" />
          <p className="text-base text-[#546285] leading-[1.5] tracking-[-0.02em] mb-4">
            {product?.description}
          </p>
          <div>
            <AddCartButton id={Number(product?.id)} />
          </div>
          <hr className="w-full h-[1px] bg-brand my-[30px]" />
        </div>
      </section>
      <section className="flex flex-col items-center w-full max-w-[1000px] mx-auto px-4 pt-[50px] minLaptop:pt-[100px] bg-[#f5fbfc]">
        <div className="flex justify-center items-center flex-wrap gap-y-[10px] gap-x-5 mb-10">
          <LinkButton
            className={`${
              !searchParams?.q ? "" : " bg-transparent border text-black"
            } w-[270px] hover:text-white`}
            link={`/order/single-product/${params.orderId}`}
          >
            Description
          </LinkButton>
          <LinkButton
            className={`${
              searchParams?.q === "additional-information"
                ? ""
                : " bg-transparent border text-black"
            } w-[270px] hover:text-white`}
            link={`/order/single-product/${params.orderId}/?q=additional-information`}
          >
            Additional Information
          </LinkButton>
          <LinkButton
            className={`${
              searchParams?.q === "reviews"
                ? ""
                : " bg-transparent border text-black"
            } w-[270px] hover:text-white`}
            link={`/order/single-product/${params.orderId}/?q=reviews`}
          >
            Reviews (1)
          </LinkButton>
        </div>
        <p className="text-center text-base text-[#546285] max-w-[800px] pb-10">
          {searchParams.q === "additional-information" && product?.information}
          {searchParams.q === "reviews" && product?.reviews}
          {!searchParams.q && product?.description}
        </p>
      </section>
      <section className="w-full max-w-[1200px] mx-auto px-4 py-[50px] minLaptop:py-[100px]">
        <h1 className="text-center text-brand mb-15 text-[60px] font-bold">
          Related Items
        </h1>
        <BrowseMenu query={product?.type || ""} page={0} />
      </section>
      <Support />
    </main>
  );
};

export default page;
