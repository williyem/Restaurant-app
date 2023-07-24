import { URLS } from "@/utils/routes";
import { RestaurantProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsClockHistory, BsBagHeart } from "react-icons/bs";

const Restaurant = ({ restaurantObj }: RestaurantProps) => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-sm  ">
      <Link
        href={`${URLS.restaurants}/${restaurantObj.id}`}
        className="relative aspect-square   "
      >
        <Image
          className="rounded-t-lg w-full object-cover max-h-60"
          src={restaurantObj?.imageUrl}
          alt="product image"
          width={350}
          height={160}
        />
      </Link>
      <div className="px-5 pb-5 pt-2 ">
        <div className="flex justify-between my-2 ">
          <a href="#">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 ">
              {restaurantObj?.name}
            </h5>
          </a>
          <BsBagHeart className="text-gray-500 text-xl cursor-pointer hover:text-red-700" />
        </div>
        <div className="flex items-center  justify-between my-1">
          <div className="flex space-x-2 items-center text-gray-500 text-sm">
            <BsClockHistory className="text-gray-500" />
            <p>{restaurantObj?.avgMinutes}</p>
          </div>
          <div className="flex items-center">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  ml-3">
              {restaurantObj?.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 ">
          <div className="relative bg-gray-200 flex px-3 justify-between items-center rounded-2xl">
            <Image
              width={16}
              height={16}
              alt="..."
              className="py-[6px]"
              src={restaurantObj?.category.img}
            />
            <p className="text-sm text-gray-600 ml-3">
              {restaurantObj?.category.name}
            </p>
          </div>
          {/* <span className="text-3xl font-bold text-gray-900 ">$599</span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </a> */}
        </div>
      </div>
    </div>
  );
};

export { Restaurant };
