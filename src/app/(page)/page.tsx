import Image from "next/image";
import FreshImage from "../../../public/fresh.png";
import WorksCard from "@/components/WorksCard";
import WorkImage1 from "../../../public/work1.png";
import WorkImage2 from "../../../public/work2.png";
import WorkImage3 from "../../../public/work3.png";
import HeroImage from "../../../public/hero-img.png";
import Checkout from "../../../public/checkout.png";
import Story from "../../../public/story.png";
import BrowseMenu from "@/components/BrowseMenu";
import LinkButton from "@/components/ui/LinkButton";
import Futures from "@/components/Futures";
import Support from "@/components/Support";
import { Suspense } from "react";

const Home = async ({ searchParams }: { searchParams: { q: string } }) => {
  return (
    <main>
      <section className="bg-no-repeat bg-[url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3306c76b60a_BG%20Shape.svg)] bg-right-top">
        <div className="tablet:pt-[100px] pt-[60px] mb-[60px] flex flex-col items-center laptop:flex-row laptop:items-start w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col items-center laptop:items-start laptop:w-1/2">
            <h1 className="tablet:text-6xl text-[45px] text-[#08090a] font-bold leading-[1] tracking-[-0.03em] text-center laptop:text-start">
              Beautiful food & takeaway,{" "}
              <span className="text-brand">delivered</span> to your door.
            </h1>
            <p className="mb-[55px] mt-5 text-paragraph text-center laptop:text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500.
            </p>
            <LinkButton link="/order">Place an Order</LinkButton>
            <div className="mt-[30px] flex flex-col items-center laptop:items-start">
              <img src="/hero-icon.svg" alt="hero-icon" />
              <p className="mt-4 text-[#08090a]">
                <span className="text-brand">4.8 out of 5 </span>
                based on 2000+ reviews
              </p>
            </div>
          </div>
          <div className="mt-[100px] laptop:mt-0 laptop:ml-10">
            <Image
              src={HeroImage}
              alt="hero-img"
              width={567}
              height={550}
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <Futures
        images={FreshImage}
        href="/company"
        buttonText="Learn about us"
        title="The home offresh products"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
      />
      <section className="flex flex-col items-center my-[100px] w-full max-w-[1200px] mx-auto px-4">
        <h1 className="text-brand tablet:text-[55px] mb-14 font-bold text-[45px]">
          How it works
        </h1>
        <div className="flex flex-col items-center gap-[32px] laptop:flex-row">
          <WorksCard
            image={WorkImage1}
            title="Adapt your menu items"
            desc="Easily adapt your menu using the webflow CMS and allow customers to browse your items."
          />
          <div className="h-[100px] laptop:w-[100px] laptop:mb-36 laptop:h-0 border border-dashed border-[#d1cdcd] flex-grow"></div>
          <WorksCard
            image={WorkImage2}
            title="Accept online orders & takeout"
            desc="Let your customers order and pay via the powerful ecommerce system, or simple let them call your store."
          />
          <div className="h-[100px] laptop:w-[100px] laptop:mb-36 laptop:h-0 border border-dashed border-[#d1cdcd]"></div>
          <WorksCard
            image={WorkImage3}
            title="Manage delivery or takeout"
            desc="Manage your own logistics and take orders simply through the ecommerce system."
          />
        </div>
      </section>
      <section className="bg-no-repeat my-[100px] max-w-[1800px] mx-auto bg-cover bg-[url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3b4c076b5ee_BG%20Shape%20Content.svg)]">
        <div className="flex flex-col items-center text-center w-full max-w-[1200px] mx-auto px-4">
          <h1 className="text-brand text-[55px] font-bold leading-[1]">
            Browse our menu
          </h1>
          <p className="text-[#546285] mt-[10px] mb-[50px]">
            Use our menu to place an order online, or{" "}
            <span className="text-brand underline cursor-pointer">phone</span>{" "}
            our store to <br /> place a pickup order. Fast and fresh food.
          </p>
          <div className="flex flex-wrap gap-x-[30px] gap-y-[10px] justify-center">
            <LinkButton
              className={`${
                !searchParams.q
                  ? "text-white bg-brand"
                  : "text-black bg-transparent border hover:text-white"
              } w-[280px]`}
              link="/"
            >
              Burgers
            </LinkButton>
            <LinkButton
              className={`${
                searchParams.q === "sides"
                  ? "text-white bg-brand"
                  : "text-black bg-transparent border hover:text-white"
              } w-[280px]`}
              link="/?q=sides"
            >
              Sides
            </LinkButton>
            <LinkButton
              className={`${
                searchParams.q === "drinks"
                  ? "text-white bg-brand"
                  : "text-black bg-transparent border hover:text-white"
              } w-[280px]`}
              link="/?q=drinks"
            >
              Drinks
            </LinkButton>
          </div>
          <Suspense fallback={"Loading..."}>
            <BrowseMenu query={searchParams.q || "burger"} page={0} />
          </Suspense>
          <LinkButton className="mt-[30px] translate-y-[30px]" link="/order">
            See Full Menu
          </LinkButton>
        </div>
      </section>
      <section className="w-full max-w-[1200px] mx-auto px-4 my-[100px] flex flex-col items-center laptop:flex-row">
        <Image
          className="w-full laptop:w-1/2"
          src={Checkout}
          alt="order online with our simple checkout"
          placeholder="blur"
          width={580}
          height={590}
        />
        <div className="flex flex-col items-center mt-[100px] laptop:mt-0 max-w-[500px] mx-auto laptop:items-start">
          <h1 className="tablet:text-[55px] text-[45px] text-brand font-bold text-center leading-[1] laptop:text-start">
            Order online with our simple checkout.
          </h1>
          <p className="mt-5 mb-[50px] text-[#546285] text-center laptop:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500.
          </p>
          <LinkButton link="/faq">See our FAQ</LinkButton>
        </div>
      </section>
      <Futures
        images={Story}
        href="/"
        buttonText="Ph. +61 233 2333"
        title="Call our store and takeaway when it suits you best."
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
      />
      <Support />
    </main>
  );
};

export default Home;
