import { MenuTile, RestaurantHead } from "@/components";
import Image from "next/image";
import React from "react";

const Restaurant = () => {
  return (
    <>
      <RestaurantHead />
      <div className="sm:max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 max-w-[95%] relative">
        <div className="flex justify-between">
          {/* MENU */}
          <div className="">
            {/* menu header */}
            <div className="flex">
              <h1 className="text-lg font-semibold">Menu</h1>
            </div>
            {/* menu items */}
            <div className="grid sm:grid-cols-2 gap-8">
              <MenuTile />
              <MenuTile />
              <MenuTile />
            </div>
          </div>
          {/* REVIEWS */}
          <div className="bg-red-100">
            <h1 className="text-lg font-semibold">Reviews</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
