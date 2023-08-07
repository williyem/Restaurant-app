"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { AppDispatch, useAppSelector } from "@/utils/redux/store";
import { useDispatch } from "react-redux";
import {
  openCart,
  removeFromCart,
  updateQuantity,
} from "@/utils/redux/slices/cart-slice";
import { quantityList } from "@/utils/easy";

const Cart = () => {
  const { isCartOpen, cartItems, total } = useAppSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch<AppDispatch>();
  const setOpen = (value: boolean) => {
    dispatch(openCart(value));
  };

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog className="relative z-20" as="div" onClose={setOpen}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <AiOutlineClose
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
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
                                          onClick={() =>
                                            dispatch(removeFromCart(id))
                                          }
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
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>GHS{total.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Delivery and other discounts will be calculated at
                        checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export { Cart };
