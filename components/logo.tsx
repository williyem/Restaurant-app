import React from "react";
interface LogoProps {
  darkVersion?: boolean;
}

const Logo = ({ darkVersion = true }: LogoProps) => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <div className="flex flex-col ">
        <h1
          className={
            darkVersion
              ? "text-xl font-extrabold leading-none "
              : "text-xl font-extrabold leading-none text-white"
          }
        >
          Food
        </h1>
        <h1 className="text-xl font-extrabold leading-none text-blue-600 ">
          Delivery
        </h1>
      </div>
    </div>
  );
};

export { Logo };
