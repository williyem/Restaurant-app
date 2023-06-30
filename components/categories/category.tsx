import Image from "next/image";
import React from "react";

interface categoryProps {
  name: string;
  img: string;
}

const Category = ({ name, img }: categoryProps) => {
  return (
    <>
      <div className="flex  flex-col items-center justify-center border-[1px] border-indigo-300 rounded-lg p-4 bg-[#F8F9FF] hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-150 cursor-pointer shadow-sm md:w-40 h-20">
        <div className="relative ">
          <Image width={24} height={24} alt="..." src={img} />
        </div>
        <p className="font-bold text-sm my-2 text-center">{name}</p>
      </div>
    </>
  );
};

export { Category };
