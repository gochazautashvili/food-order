import Image from "next/image";
import Link from "next/link";
import SupportImage from "../../public/support.png";

const Support = () => {
  return (
    <section className="w-full max-w-[1800px] mt-[100px] mx-auto px-4 laptop:flex gap-5">
      <Image
        className="h-[420px] laptop:h-[640px] object-cover w-full laptop:w-1/2"
        src={SupportImage}
        alt="support good food ad local business."
        width={880}
        height={640}
        placeholder="blur"
      />
      <div className="w-full laptop:w-1/2 laptop:h-[640px] h-[420px] bg-brand p-6 laptop:px-[60px] flex flex-col justify-center items-start mt-5 laptop:mt-0">
        <h1 className="text-[55px] font-bold text-white leading-[1.1] mb-10">
          <span className="text-[#1b9097]">Support</span> good food and local
          busines
        </h1>
        <Link className="py-5 px-9 rounded bg-white text-brand" href="/order">
          Order Now
        </Link>
      </div>
    </section>
  );
};

export default Support;
