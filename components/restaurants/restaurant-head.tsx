import Image from "next/image";
import React from "react";
import { BsClockHistory, BsBagHeart } from "react-icons/bs";

const RestaurantHead = () => {
  return (
    <>
      <div className="bg-gray-100 py-8 mb-6 mt-[1px]">
        <div className="sm:max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 max-w-[95%] relative">
          <div className=" my-8 flex">
            <div className="sm:mr-8">
              <a href="#" className="relative aspect-square">
                <Image
                  className="rounded-xl w-full object-cover max-h-60"
                  src="/products/restaurants/img.jpg"
                  alt="product image"
                  width={200}
                  height={120}
                />
              </a>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold">Royal Sushi House</h1>
              <p className="text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, quisquam? Cum cupiditate iusto sunt ducimus beatae
                natus fugit odio provident.
              </p>
              <div className="flex space-x-2 items-center text-gray-500 text-sm my-4">
                <BsClockHistory className="text-gray-500" />
                <p>30-40 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { RestaurantHead };
