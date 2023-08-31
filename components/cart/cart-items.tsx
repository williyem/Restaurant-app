"use client";
import React from "react";

import { AppDispatch, useAppSelector } from "@/utils/redux/store";
import { useDispatch } from "react-redux";
import {
  openCart,
  removeFromCart,
  updateQuantity,
} from "@/utils/redux/slices/cart-slice";
import { quantityList } from "@/utils/easy";
import CartItems from "./cart-items";

const CartItemsContainer = () => {
  const { isCartOpen, cartItems, total } = useAppSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch<AppDispatch>();
  const setOpen = (value: boolean) => {
    dispatch(openCart(value));
  };

  return (
    <>
      <div className="mt-8">
        <div className="flow-root">
          {!cartItems.length ? (
            <div className="text-center">
              <h1>No food selected</h1>
            </div>
          ) : (
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems.map((food, index) => {
                const {
                  id,
                  name,
                  restaurant,
                  price,
                  imageUrl,
                  rating,
                  quantity,
                } = food;
                return (
                  <li className="flex py-6" key={id}>
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{name}</a>
                          </h3>
                          <p className="ml-4">${price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {restaurant}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">
                          Quantity{" "}
                          <select
                            name="quantity"
                            id="quantity"
                            value={quantity}
                            onChange={(e) =>
                              // setQuantity(parseInt(e.target.value))
                              dispatch(
                                updateQuantity({
                                  value: parseInt(e.target.value),
                                  index: index,
                                })
                              )
                            }
                            className="p-1  border py-1 px-2 text-sm font-medium rounded-md bg-gray-50 shadow-sm"
                          >
                            {quantityList(10).map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => dispatch(removeFromCart(id))}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default CartItemsContainer;
