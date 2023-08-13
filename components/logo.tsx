import { LogoProps } from "@/utils/types";
import Link from "next/link";
import React from "react";

const Logo = ({ darkVersion = true }: LogoProps) => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/" className="flex flex-col ">
        <h1
          className={
            darkVersion
              ? "text-xl font-extrabold leading-none "
              : "text-xl font-extrabold leading-none text-white"
          }
        >
          Restaurant
        </h1>
        <h1 className="text-xl font-extrabold leading-none text-blue-600 ">
          App
        </h1>
      </Link>
    </div>
  );
};

export { Logo };
