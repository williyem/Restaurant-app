import Link from "next/link";
import React from "react";

const SeeMore = () => {
  return (
    <>
      <div className="grid place-items-center py-2">
        <Link
          href="#"
          className="animation__link text-indigo-600 hover:text-white bg-white border-2 border-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-semibold px-5 py-2.5 text-center "
        >
          See All Dishes
        </Link>
      </div>
    </>
  );
};

export { SeeMore };
