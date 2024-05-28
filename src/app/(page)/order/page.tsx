import BrowseMenu from "@/components/BrowseMenu";
import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import LinkButton from "@/components/ui/LinkButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Suspense } from "react";

const OrderPage = async ({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) => {
  const content = (
    <p className="relative z-10 tablet:text-6xl text-5xl font-bold leading-[1] text-[#191b22] text-center">
      Get your food <span className="text-brand">delivered</span>, <br /> or{" "}
      <span className="text-brand">pick-up</span> in store.
    </p>
  );

  let page = 0;

  return (
    <main>
      <Hero text={content} />
      <div className="flex flex-wrap justify-center px-2 gap-y-[10px] gap-x-[20px] mt-[100px]">
        <LinkButton
          className={`${
            !searchParams?.q ? "" : " bg-transparent border text-black"
          } w-[270px] hover:text-white`}
          link="/order"
        >
          Full Menu
        </LinkButton>
        <LinkButton
          className={`${
            searchParams?.q === "burger"
              ? ""
              : " bg-transparent border text-black"
          } w-[270px] hover:text-white`}
          link="order/?q=burger"
        >
          Burgers
        </LinkButton>
        <LinkButton
          className={`${
            searchParams?.q === "sides"
              ? ""
              : " bg-transparent border text-black"
          } w-[270px] hover:text-white`}
          link="order/?q=sides"
        >
          Sides
        </LinkButton>
        <LinkButton
          className={`${
            searchParams?.q === "drinks"
              ? ""
              : " bg-transparent border text-black"
          } w-[270px] hover:text-white`}
          link="order/?q=drinks"
        >
          Drinks
        </LinkButton>
      </div>
      <Suspense key={searchParams.q} fallback={<Loading />}>
        <BrowseMenu
          query={searchParams.q}
          page={Number(searchParams.page) || 0}
        />
      </Suspense>
      <div className="flex flex-wrap gap-4 justify-center max-w-[350px] mx-auto">
        {Number(searchParams.page) > 0 && (
          <LinkButton
            className="rounded mt-[60px] mx-auto w-[126px] h-[60px] bg-brand text-base text-white flex justify-center items-center"
            link={`order/?page=${Number(searchParams.page) - 1}`}
          >
            <ChevronLeft className="w-6 mr-3" /> Prev
          </LinkButton>
        )}
        <LinkButton
          className="rounded mt-[60px] mx-auto w-[126px] h-[60px] bg-brand text-base text-white flex justify-center items-center"
          link={`order/?page=${page + 1}`}
        >
          Next <ChevronRight className="w-6 ml-3" />
        </LinkButton>
      </div>
    </main>
  );
};

export default OrderPage;
