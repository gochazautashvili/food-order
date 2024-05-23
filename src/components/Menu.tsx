"use client";
import useAdmin from "@/hooks/useAdmin";
import { links } from "@/data/links";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const admin = useAdmin();
  const { userId } = useAuth();

  return (
    <div className="flex laptop:hidden">
      <button
        onClick={() => setMenu(!menu)}
        className={`p-3 ${menu ? "bg-brand" : "bg-[#7e828f1a]"} rounded`}
        title="menu"
        type="button"
      >
        <MenuIcon color={menu ? "white" : "black"} />
      </button>
      <div
        className={`absolute ${
          menu ? "tablet:top-32 top-20" : "-top-[100%]"
        } left-0 py-4 bg-white shadow-md w-full transition-all duration-500 z-50`}
      >
        <ul className="flex flex-col gap-y-8 pl-6 items-start">
          {links.map((link, i) => {
            return (
              <li onClick={() => setMenu(false)} key={i}>
                <Link href={link.href}>{link.value}</Link>
              </li>
            );
          })}
          {admin && (
            <li onClick={() => setMenu(false)}>
              <Link href="/admin">admin</Link>
            </li>
          )}
          {userId ? (
            <SignOutButton redirectUrl="/sign-in" />
          ) : (
            <li>
              <Link href="/sign-in">Sign In</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
