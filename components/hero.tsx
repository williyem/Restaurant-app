import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex gap-2 my-6">
        <div className="bg-indigo-50 flex gap-4 items-center justify-center rounded-lg  pl-6  pr-16">
          <Image width={220} height={220} alt="..." src="/biker.png" />
          <div className="flex flex-col items-start justify-between h-[70%]  tracking-wider">
            <h3 className="text-xl">All Rides</h3>
            <h1 className="text-indigo-600 text-5xl font-semibold">20% OFF</h1>
            <p className="text-sm text-gray-600">Dispatch Riders</p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export { Hero };
