"use server";
import React, { ReactNode } from "react";
import { Button } from "./button";
import Link from "next/link";

type Props = {
  children: ReactNode;
  link: string;
  className?: string;
};

const LinkButton = ({ children, link, className }: Props) => {
  return (
    <Button
      className={`bg-brand rounded w-[200px] h-[60px] hover:bg-brand p-0 ${className}`}
    >
      <Link
        className="flex items-center text-xl justify-center bg-svg bg-no-repeat w-full h-full"
        href={link}
        scroll={false}
      >
        {children}
      </Link>
    </Button>
  );
};

export default LinkButton;
