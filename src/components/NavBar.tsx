"use client";
import useAdmin from "@/hooks/useAdmin";
import { links } from "@/data/links";
import { SignOutButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const admin = useAdmin();
  const { userId } = useAuth();

  const handleShare = () => {
    const email = "gochazautashvili2017@gmail.com";
    const subject = "Your Subject Here Test!";
    const body = "Hello, this is the body of the email. Test!";

    const mailtoLink =
      "mailto:" +
      email +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  };

  return (
    <ul className="hidden laptop:flex items-center gap-x-8">
      {links.map((link, i) => {
        return (
          <li
            className={`text-[16px] ${
              pathname === link.href ? "text-brand" : "text-[#28224b]"
            }`}
            key={i}
          >
            <Link href={link.href}>{link.value}</Link>
          </li>
        );
      })}
      <li onClick={handleShare} className="cursor-pointer">
        Contact
      </li>
      {admin && (
        <li
          className={`text-[16px] ${
            pathname === "/admin" ? "text-brand" : "text-[#28224b]"
          }`}
        >
          <Link href="/admin">Admin</Link>
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
  );
};

export default NavBar;
