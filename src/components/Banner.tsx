import Link from "next/link";

const Banner = () => {
  return (
    <div className="hidden items-center justify-center tablet:flex h-[38px] px-4 bg-brand bg-svg bg-no-repeat">
      <div className="text-sm text-white">
        <span className="opacity-90 font-light">
          We're open and available for takeaway & delivery.
        </span>{" "}
        <Link href="/order">Order Now</Link>
      </div>
    </div>
  );
};

export default Banner;
