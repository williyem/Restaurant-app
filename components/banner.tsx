"use client";
import { classNames } from "@/utils/easy";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Banner() {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div
      className={classNames(
        !showBanner ? "hidden" : "  ",
        "  transition-all duration-200 ease-in-out relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
      )}
    >
      <div className="flex flex-wrap  w-full  justify-between items-center gap-x-4 gap-y-2 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <p className="text-sm leading-6 text-white">
          Login or register to see your order history and enjoy promos
        </p>
        <div className="space-x-4">
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Create an account
          </a>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            login
          </a>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={() => setShowBanner(false)}
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <AiOutlineClose className="h-5 w-5 text-white" aria-hidden="true" />
          {/* <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" /> */}
        </button>
      </div>
    </div>
  );
}
