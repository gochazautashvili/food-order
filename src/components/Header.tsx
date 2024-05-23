import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getUserCartProduct } from "@/data/product";
const Menu = dynamic(() => import("./Menu"), {
  ssr: false,
  loading: () => (
    <div className="w-12 h-12 bg-gray-500 animate-pulse rounded flex laptop:hidden"></div>
  ),
});
const Cart = dynamic(() => import("./Cart"), {
  ssr: false,
  loading: () => (
    <div className="w-12 h-12 bg-gray-500 animate-pulse rounded"></div>
  ),
});
const NavBar = dynamic(() => import("./NavBar"), {
  ssr: false,
  loading: () => (
    <div className="w-[550px] rounded h-7 bg-slate-400 animate-pulse hidden laptop:flex"></div>
  ),
});

const Header = async () => {
  const products = await getUserCartProduct();

  return (
    <nav className="flex items-center justify-between px-4 py-5 bg-white w-full max-w-[1200px] mx-auto">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={40} height={51} />
      </Link>
      <div className="flex items-center gap-x-8">
        <NavBar />
        <div className="flex gap-x-4">
          <Cart products={products.products} />
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
