import { addToCart } from "@/utils/redux/slices/cart-slice";
import { AppDispatch } from "@/utils/redux/store";
import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";

const MenuTile = ({ food }: any) => {
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="max-w-[370px] md:max-lg:max-w-[80%] md:max-lg:mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-4">
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
              {food?.name}
            </h5>
          </a>
          <p className="mb-2 font-normal text-sm text-gray-500 ">
            {food?.description}
          </p>
          <div className="flex justify-between">
            <p className="text-xl font-bold">GHS {food.price.toFixed(2)}</p>
            <div className="bg-indigo-100 rounded-xl p-2 animation__link hover:bg-indigo-200 cursor-pointer">
              <AiOutlineShoppingCart
                className="text-xl font-bold text-indigo-600 "
                // onClick={() => dispatch(addToCart(food))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MenuTile };
