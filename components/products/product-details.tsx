import { classNames, quantityList } from "@/utils/easy";
import { FoodObj } from "@/utils/types";
import React from "react";

interface ProductDetailsProps {
  quantity: number;
  setQuantity(value: number): void;
  size: number;
  setSize(value: number): void;
  foodObj: FoodObj;
}

const ProductDetails = ({
  quantity,
  setQuantity,
  foodObj,
  size,
  setSize,
}: ProductDetailsProps) => {
  return (
    <div className="">
      <p className="leading-relaxed mb-4">{foodObj.description}</p>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Category</span>
        <span className="ml-auto text-gray-900 capitalize">
          {foodObj.category}
        </span>
      </div>
      <div className="flex justify-between border-t border-gray-200 py-2">
        <span className="text-gray-500">Size</span>
        <div className="space-x-2 flex">
          <span
            onClick={() => setSize(2)}
            className={classNames(
              size === 2
                ? "text-indigo-600 border-indigo-600"
                : "hover:bg-gray-50 bg-white text-gray-900 ",
              "ml-auto relative flex items-center justify-center rounded-md border py-1 px-2 text-sm font-medium uppercase focus:outline-none sm:flex-1 cursor-pointer  shadow-sm"
            )}
          >
            Large
          </span>
          <span
            onClick={() => setSize(1)}
            className={classNames(
              size === 1
                ? "text-indigo-600 border-indigo-600"
                : "hover:bg-gray-50 bg-white text-gray-900 ",
              "ml-auto relative flex items-center justify-center rounded-md border py-1 px-2 text-sm font-medium uppercase focus:outline-none sm:flex-1 cursor-pointer  shadow-sm"
            )}
          >
            Medium
          </span>
          <span
            onClick={() => setSize(0)}
            className={classNames(
              size === 0
                ? "text-indigo-600 border-indigo-600"
                : "hover:bg-gray-50 bg-white text-gray-900 ",
              "ml-auto relative flex items-center justify-center rounded-md border py-1 px-2 text-sm font-medium uppercase focus:outline-none sm:flex-1 cursor-pointer  shadow-sm"
            )}
          >
            Small
          </span>
        </div>
      </div>
      <div className="flex justify-between border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500">Quantity</span>
        <div className="flex space-x-2 text-xl">
          {/* <button
        onClick={() => setQuantity(quantity - 1)}
        className="bg-gray-100 px-2 py-[2px] border"
      >
        -
      </button> */}
          {/* <span className="ml-auto text-gray-900">1</span> */}
          <select
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="p-1  border py-1 px-2 text-sm font-medium rounded-md bg-gray-50 shadow-sm"
          >
            {quantityList(10).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {/* <button
        onClick={() => setQuantity(quantity + 1)}
        className="bg-gray-100 px-2 py-[2px] border"
      >
        +
      </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
