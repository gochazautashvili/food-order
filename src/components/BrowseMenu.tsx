import { getProduct } from "@/data/product";
import MenuCard from "./MenuCard";

const BrowseMenu = async ({ query, page }: { query: string; page: number }) => {
  const products = await getProduct(query, page);

  return (
    <section className="grid grid-cols-1 tablet:grid-cols-2 minLaptop:grid-cols-1 laptop:grid-cols-2 gap-5 place-items-center mt-10 w-full max-w-[1200px] mx-auto px-4">
      {products.map((product) => {
        return (
          <MenuCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </section>
  );
};

export default BrowseMenu;
