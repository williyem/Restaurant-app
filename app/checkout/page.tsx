"use client";
import CartItemsContainer from "@/components/cart/cart-items";
import { classNames } from "@/utils/easy";
import { setIsDelivery } from "@/utils/redux/slices/restaurant-slice";
import { AppDispatch, useAppSelector } from "@/utils/redux/store";
import { Disclosure } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { SubmitHandler, Controller, useForm } from "react-hook-form";
import { useRef, useState } from "react";

// const discount = { code: "CHEAPSKATE", amount: "GHS 24.00" };
// const taxes = "GHS 23.68";
const delivery = "GHS 00.00";

type Inputs = {
  location?: string;
  password: string;
  email: string;
  phone: string;
  requests?: string;
};

const isLocationRequired = (isDelivery: boolean) => {
  if (isDelivery) {
    return {
      required: "Location is required",
    };
  }

  return { required: false };
};

export default function Example() {
  const [isChecked, setChecked] = useState<boolean>(false);
  const { isDelivery } = useAppSelector((state) => state.restaurant);
  const { total } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isDelivery) {
      const { location, ...rest } = data;
      console.log(rest);
      return;
    }
    console.log(data);
    // await signup(data, setModalOff);
  };
  return (
    <>
      <main className="lg:min-h-[80vh] lg:overflow-hidden  lg:flex lg:flex-row-reverse">
        <h1 className="sr-only">Checkout</h1>

        {/* Mobile order summary */}
        <section
          aria-labelledby="order-heading"
          className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
        >
          <Disclosure as="div" className="max-w-lg mx-auto">
            {({ open }) => (
              <>
                <div className="flex items-center justify-between">
                  <h2
                    id="order-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    Your Order
                  </h2>
                  <Disclosure.Button className="font-medium text-indigo-600 hover:text-indigo-500">
                    {open ? (
                      <span>Hide full summary</span>
                    ) : (
                      <span>Show full summary</span>
                    )}
                  </Disclosure.Button>
                </div>

                <Disclosure.Panel>
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 border-b border-gray-200"
                  >
                    <CartItemsContainer />
                  </ul>

                  {/* <div className="mt-10">
                    <label
                      htmlFor="discount-code-mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Discount code
                    </label>
                    <div className="flex space-x-4 mt-1">
                      <input
                        type="text"
                        id="discount-code-mobile"
                        name="discount-code-mobile"
                        className="block w-full border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <button
                        type="submit"
                        className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                      >
                        Apply
                      </button>
                    </div>
                  </div> */}

                  <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd className="text-gray-900">GHS {total?.toFixed(2)}</dd>
                    </div>
                    {/* <div className="flex justify-between">
                      <dt className="flex">
                        Discount
                        <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                          {discount.code}
                        </span>
                      </dt>
                      <dd className="text-gray-900">-{discount.amount}</dd>
                    </div> */}
                    {/* <div className="flex justify-between">
                      <dt>Taxes</dt>
                      <dd className="text-gray-900">{taxes}</dd>
                    </div> */}
                    {isDelivery ? (
                      <div className="flex justify-between">
                        <dt>Delivery</dt>
                        <dd className="text-gray-900">{delivery}</dd>
                      </div>
                    ) : null}
                  </dl>
                </Disclosure.Panel>

                <p className="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
                  <span className="text-base">Total</span>
                  <span className="text-base">GHS {total?.toFixed(2)}</span>
                </p>
              </>
            )}
          </Disclosure>
        </section>

        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className="hidden relative top-[2px] bg-gray-50 w-full max-w-md flex-col lg:flex"
        >
          <h2 id="summary-heading" className="sr-only">
            Order summary
          </h2>

          <ul
            role="list"
            className="flex-auto overflow-y-auto divide-y divide-gray-200 px-6"
          >
            <CartItemsContainer />
          </ul>

          <div className="sticky bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6">
            {/* <div>
              <label
                htmlFor="discount-code"
                className="block text-sm font-medium text-gray-700"
              >
                Discount code
              </label>
              <div className="flex space-x-4 mt-1">
                <input
                  type="text"
                  id="discount-code"
                  name="discount-code"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                  type="submit"
                  className="bg-gray-200 text-sm font-medium text-gray-600 rounded-md px-4 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Apply
                </button>
              </div>
            </div> */}

            <dl className="text-sm font-medium text-gray-500  space-y-6">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">GHS {total?.toFixed(2)}</dd>
              </div>
              {/* <div className="flex justify-between">
                <dt className="flex">
                  Discount
                  <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                    {discount.code}
                  </span>
                </dt>
                <dd className="text-gray-900">-{discount.amount}</dd>
              </div> */}
              {/* <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">{taxes}</dd>
              </div> */}
              {isDelivery ? (
                <div className="flex justify-between">
                  <dt>Delivery</dt>
                  <dd className="text-gray-900">{delivery}</dd>
                </div>
              ) : null}
              <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">GHS {total?.toFixed(2)}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Checkout form */}
        <section
          aria-labelledby="payment-heading"
          className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24"
        >
          <div className="max-w-lg mt-10 mx-auto">
            <div className="flex  space-x-2 justify-between bg-gray-100 rounded-xl shadow-sm border p-1">
              <button
                type="button"
                onClick={() => {
                  // !isDelivery && setValue("location", "");
                  dispatch(setIsDelivery(true));
                }}
                className={classNames(
                  isDelivery
                    ? " bg-white border shadow-sm border-gray-300 relative"
                    : "",
                  "    w-full flex items-center justify-center   text-gray-600 rounded-xl py-2 hover:bg-gray-50 focus:outline-none "
                )}
              >
                <span className="sr-only">Delivery</span>
                Delivery
              </button>
              <button
                type="button"
                onClick={() => {
                  // isDelivery && setValue("location", "");
                  dispatch(setIsDelivery(false));
                }}
                className={classNames(
                  !isDelivery
                    ? " bg-white border shadow-sm border-gray-300 relative"
                    : "",
                  "    w-full flex items-center justify-center   text-gray-600 rounded-xl py-2 focus:outline-none "
                )}
              >
                <span className="sr-only">Pickup</span>
                Pickup
              </button>
            </div>

            <div className="relative mt-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-sm font-medium text-gray-500">
                  or
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="grid grid-cols-12 gap-y-6 gap-x-4">
                {isDelivery ? (
                  <div className="col-span-full">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Specify Location
                    </label>
                    <div className="mt-1">
                      <input
                        {...register(
                          "location",
                          isLocationRequired(isDelivery)
                        )}
                        type="text"
                        id="location"
                        name="location"
                        autoComplete="cc-name"
                        className="block w-full border-gray-300 p-2 border  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {errors.location?.message ? (
                        <p className="text-left text-sm text-rose-600">
                          {errors.location?.message}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ) : null}
                <div className="col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("email", {
                        required: "Email is required",
                      })}
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className="block w-full border-gray-300 p-2 border  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.email?.message ? (
                      <p className="text-left text-sm text-rose-600">
                        {errors.email?.message}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("phone", {
                        required: "Phone is required",
                      })}
                      type="phone"
                      id="phone"
                      name="phone"
                      className="block w-full border-gray-300 p-2 border  rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    {errors.phone?.message ? (
                      <p className="text-left text-sm text-rose-600">
                        {errors.phone?.message}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="request"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Any Special Comments or Requests
                  </label>
                  <div className="mt-1">
                    <textarea
                      {...register("requests", {
                        required: false,
                      })}
                      id="message"
                      rows={2}
                      className="block  w-full border-gray-300 p-2 border  rounded-md shadow-sm text-sm text-gray-900   focus:ring-indigo-500 focus:border-indigo-500  "
                      placeholder=""
                    ></textarea>
                  </div>
                </div>
              </div>

              {isDelivery ? (
                <div className="mt-6 flex space-x-2">
                  <div className="flex items-center h-5">
                    <input
                      id="same-as-delivery"
                      name="same-as-delivery"
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <label
                    htmlFor="same-as-delivery"
                    className="text-sm font-medium text-gray-900"
                  >
                    I accept that courier may not have change
                  </label>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={!total || (isDelivery && !isChecked)}
                className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Pay GHS {total?.toFixed(2)}
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
