"use client";
import { useAppSelector } from "@/utils/redux/store";
import { categoryProps } from "@/utils/types";
import Image from "next/image";
import React from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const Category = ({ name, img, id, handleClick }: categoryProps) => {
  const { selectedCategory } = useAppSelector((state) => state.restaurant);
  // const { isCartOpen } = useAppSelector((state) => {
  //   console.log("store", state)
  //   return state.cart});

  return (
    <>
      <div
        onClick={() => handleClick(id)}
        className={classNames(
          selectedCategory === id
            ? "border-indigo-500 rounded-lg p-4 bg-indigo-100 hover:border-indigo-900 hover:bg-indigo-100 border-[2px] "
            : "border-indigo-300 rounded-lg p-4 bg-[#F8F9FF] hover:border-indigo-600 hover:bg-indigo-50 border-[1px]",
          "flex flex-col items-center justify-center  transition-all duration-150 cursor-pointer shadow-sm md:w-40 h-20"
        )}
      >
        <div className="relative ">
          <Image width={24} height={24} alt="..." src={img} />
        </div>
        <p className="font-bold text-sm my-2 text-center">{name}</p>
      </div>
    </>
  );
};

export { Category };
