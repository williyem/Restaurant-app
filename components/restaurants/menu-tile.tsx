"use client";
import { addToCart } from "@/utils/redux/slices/cart-slice";
import { openProductOverview } from "@/utils/redux/slices/user-slice";
import { AppDispatch } from "@/utils/redux/store";
import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";

const MenuTile = ({ food }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div
        onClick={() =>
          dispatch(
            openProductOverview({ showProductOverview: true, productObj: food })
          )
        }
        className="cursor-pointer md:max-lg:mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-4 "
      >
        <div className="h-52 rounded-xl border overflow-hidden">
          <Image
            className="hover:scale-[1.05] transition-all duration-300 delay-75 w-full h-full object-cover "
            src="/products/restaurants/img.jpg"
            alt="product image"
            width={200}
            height={120}
          />
        </div>
        <div className="mt-2">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
              {food?.name}
            </h5>
          </a>
          <p className="mb-2 font-normal text-sm text-gray-500 ">
            {food?.description}
          </p>
          <div className="flex justify-between">
            <p className="text-xl font-bold">GHS {food.price.toFixed(2)}</p>
            <button
              className="bg-indigo-100 rounded-xl p-2 animation__link hover:bg-indigo-200 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart({ ...food, quantity: 1 }));
              }}
            >
              <AiOutlineShoppingCart className="text-xl font-bold text-indigo-600 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { MenuTile };
