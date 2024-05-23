import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-[100px] pb-[60px] bg-[#f5fbfc] mt-10">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between flex-wrap max-w-[800px] gap-5">
          <div>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={40} height={51} />
            </Link>
            <p className="text-[#546285] leading-[1.5] mt-6">
              Takeaway & Delivery <br /> template <br /> for small - medium{" "}
              <br /> businesses.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#08090a] text-[13px] font-semibold mb-5">
              COMPANY
            </p>
            <Link className="py-2 mb-3 text-[#28224b] text-[13px]" href="/">
              Home
            </Link>
            <Link
              className="py-2 mb-3 text-[#28224b] text-[13px]"
              href="/order"
            >
              Order
            </Link>
            <Link className="py-2 mb-3 text-[#28224b] text-[13px]" href="/faq">
              FAQ
            </Link>
            <Link
              className="py-2 mb-3 text-[#28224b] text-[13px]"
              href="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="text-[#08090a] text-[13px] font-semibold mb-5">
              TEMPLATE
            </p>
            <Link className="py-2 mb-3 text-[#28224b] text-[13px]" href="/">
              Style Guide
            </Link>
            <Link
              className="py-2 mb-3 text-[#28224b] text-[13px]"
              href="/order"
            >
              Changelog
            </Link>
            <Link className="py-2 mb-3 text-[#28224b] text-[13px]" href="/faq">
              Licence
            </Link>
            <Link
              className="py-2 mb-3 text-[#28224b] text-[13px]"
              href="/contact"
            >
              Webflow University
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="text-[#08090a] text-[13px] font-semibold mb-5">
              FLOWBASE
            </p>
            <Link className="py-2 mb-3 text-[#28224b] text-[13px]" href="/">
              More Cloneables
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full bg-[rgba(126,130,143,0.09)] mt-[100px] mb-[60px]" />
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between">
          <p>
            Built by{" "}
            <span className="text-brand underline cursor-pointer">
              Flowbase
            </span>{" "}
            · Powered by{" "}
            <span className="text-brand underline cursor-pointer">Webflow</span>
          </p>
          <div className="flex items-center gap-6">
            <Link
              className="w-10 h-10 flex items-center justify-center border border-[rgba(126,130,143,0.86)] rounded-full"
              href="/"
            >
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={18}
                height={18}
              />
            </Link>
            <Link
              className="w-10 h-10 flex items-center justify-center border border-[rgba(126,130,143,0.86)] rounded-full"
              href="/"
            >
              <Image src="/twitter.svg" alt="twitter" width={18} height={18} />
            </Link>
            <Link
              className="w-10 h-10 flex items-center justify-center border border-[rgba(126,130,143,0.86)] rounded-full"
              href="/"
            >
              <Image src="/youtube.svg" alt="youtube" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
