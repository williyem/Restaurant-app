import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex  my-6">
        <div className="bg-indigo-50 flex gap-4 items-center justify-center rounded-lg border pl-6 sm:mr-5 pr-16 basis-1/2 border-indigo-100 shadow-sm">
          <Image width={220} height={220} alt="..." src="/biker.png" />
          <div className="flex flex-col items-start justify-between h-[70%]  tracking-wider">
            <h3 className="text-xl">All Rides</h3>
            <h1 className="text-indigo-600 text-5xl font-semibold">20% OFF</h1>
            <p className="text-sm text-gray-600">Dispatch Riders</p>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-100 shadow-sm flex gap-4 items-center justify-center sm:ml-5 rounded-lg  pl-6 basis-1/2  pr-16">
          <Image width={220} height={220} alt="..." src="/food.png" />
          <div className="flex flex-col items-start justify-between h-[70%]  tracking-wider">
            <h3 className="text-xl">All Meals</h3>
            <h1 className="text-orange-600 text-5xl font-semibold">25% OFF</h1>
            <p className="text-sm text-gray-600">Fooddies</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Hero };
