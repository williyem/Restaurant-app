import React from "react";
import { Restaurant } from "./restaurant";
import { restaurantArr } from "@/utils/ui-data";
import { SeeMore } from "../see-more";

const Restaurants = ({}) => {
  return (
    <>
      <div className="mt-10 mb-4 text-2xl font-semibold ">
        <h1>Limited Time Offers</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurantArr.map((restaurantObj) => {
          return (
            <Restaurant key={restaurantObj.id} restaurantObj={restaurantObj} />
          );
        })}
      </div>
      <SeeMore />
    </>
  );
};

export { Restaurants };
