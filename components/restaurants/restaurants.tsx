import React from "react";
import { Restaurant } from "./restaurant";

const Restaurants = () => {
  return (
    <>
      <div className="mt-10 mb-4 text-xl font-semibold ">
        <h1>Popular Restaurants</h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
    </>
  );
};

export { Restaurants };
