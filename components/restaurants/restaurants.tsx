import React from "react";
import { Restaurant } from "./restaurant";



const Restaurants = ({}) => {
  return (
    <>
      <div className="mt-10 mb-4 text-xl font-semibold ">
        <h1>Popular Restaurants</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
      <div className="grid place-items-center py-6">
        <a
          href="#"
          className="animation__link text-indigo-600 hover:text-white bg-white border-2 border-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-semibold px-5 py-2.5 text-center "
        >
          See More
        </a>
      </div>
    </>
  );
};

export { Restaurants };
