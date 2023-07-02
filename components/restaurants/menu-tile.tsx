import Image from "next/image";
import React from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";

const MenuTile = () => {
  return (
    <>
      <div className="max-w-[350px] bg-white border border-gray-200 rounded-xl shadow-sm p-4">
        <a href="#">
          <Image
            className="rounded-xl w-full object-cover h-52"
            src="/products/restaurants/img.jpg"
            alt="product image"
            width={200}
            height={120}
          />
        </a>
        <div className="mt-2">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
              Roll Set
            </h5>
          </a>
          <p className="mb-2 font-normal text-sm text-gray-500 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="flex justify-between">
            <p className="text-xl font-bold">GHS 80.00</p>
            <div className="bg-indigo-100 rounded-xl p-2 animation__link hover:bg-indigo-200 cursor-pointer">
              <AiOutlineShoppingCart className="text-xl font-bold text-indigo-600 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MenuTile };
