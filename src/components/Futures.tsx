import Image, { StaticImageData } from "next/image";
import LinkButton from "./ui/LinkButton";

type Props = {
  images: StaticImageData;
  title: string;
  desc: string;
  href: string;
  buttonText: string;
};

const Futures = ({ images, title, desc, href, buttonText }: Props) => {
  return (
    <section className="py-24 px-4 max-w-[1800px] mx-auto bg-white bg-cover bg-top bg-no-repeat bg-[url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3b4c076b5ee_BG%20Shape%20Content.svg)]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col laptop:flex-row items-center">
        <div className="flex flex-col items-center laptop:items-start laptop:w-1/2 max-w-[500px]">
          <h1 className="text-center laptop:text-start text-brand tablet:text-[55px] text-[45px] font-bold leading-[1]">
            {title}
          </h1>
          <p className="text-center laptop:text-start mt-5 mb-12 text-base text-[#546285]">
            {desc}
          </p>
          <LinkButton link={href}>{buttonText}</LinkButton>
        </div>
        <div className="mt-20 laptop:mt-0">
          <Image
            src={images}
            alt="fresh products"
            width={523}
            height={614}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default Futures;
