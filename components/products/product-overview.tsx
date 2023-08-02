"use client";
import { classNames, quantityList } from "@/utils/easy";
import { addToCart } from "@/utils/redux/slices/cart-slice";
import { openProductOverview } from "@/utils/redux/slices/user-slice";
import { AppDispatch, useAppSelector } from "@/utils/redux/store";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProductDetails from "./product-details";
import ProductReviews from "./product-reviews";

const ProductOverview = ({ foodObj }: any) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(1);
  const [contentIndex, setContentIndex] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="relative z-10" role="dialog" aria-modal="true">
        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      openProductOverview({ showProductOverview: false })
                    )
                  }
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 aspect-w-2 overflow-hidden h-full rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <Image
                      className="rounded-xl w-full object-cover h-full"
                      src="/products/restaurants/img.jpg"
                      alt="product image"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className=" sm:col-span-8 lg:col-span-7 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                      {foodObj?.restaurant}
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                      {foodObj?.name}
                    </h1>
                    <div className="flex mb-4">
                      <button
                        onClick={() => setContentIndex(0)}
                        className={classNames(
                          contentIndex === 0
                            ? "border-indigo-500 text-indigo-500 "
                            : "hover:text-indigo-800",
                          "flex-grow border-b-2  py-2 text-lg px-1 cursor-pointer"
                        )}
                      >
                        Description
                      </button>
                      <button
                        onClick={() => setContentIndex(1)}
                        className={classNames(
                          contentIndex === 1
                            ? "border-indigo-500 text-indigo-500 "
                            : "hover:text-indigo-800",
                          "flex-grow border-b-2  py-2 text-lg px-1 cursor-pointer"
                        )}
                      >
                        Reviews
                      </button>
                      {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 hover:text-indigo-500  cursor-pointer transition-all duration-300 ease-in-out">
                        Details
                      </a> */}
                    </div>
                    {contentIndex === 0 ? (
                      <ProductDetails
                        quantity={quantity}
                        setQuantity={setQuantity}
                        foodObj={foodObj}
                        size={size}
                        setSize={setSize}
                      />
                    ) : (
                      <ProductReviews />
                    )}

                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        GHS {foodObj?.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => {
                          dispatch(
                            openProductOverview({ showProductOverview: false })
                          );
                          dispatch(
                            addToCart({ ...foodObj, quantity: quantity })
                          );
                        }}
                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                      >
                        Add to cart
                      </button>
                      {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductOverview };
