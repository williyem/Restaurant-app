"use client";
import React from "react";
import { MenuTile, RestaurantHead } from "@/components";
import { foodArr, reviews } from "@/utils/ui-data";
import { BiSolidStar } from "react-icons/bi";
import { toast } from "react-hot-toast";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Restaurant = () => {
  const restaurantRating = 4.2;
  return (
    <>
      <RestaurantHead />
      <div className="sm:max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 max-w-[95%] relative mb-8">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          {/* MENU */}
          <div className="">
            {/* menu header */}
            <div className="flex">
              <h1 className="text-lg font-semibold">Menu</h1>
            </div>
            {/* menu items */}
            <div className="grid sm:grid-cols-2 xl:gap-8 gap-2  md:max-lg:grid-cols-1 place-items-center">
              {foodArr.map((food) => (
                <MenuTile key={food.id} food={food} />
              ))}
            </div>
          </div>
          {/* REVIEWS */}
          <div className="md:max-w-[350px]">
            <h1 className="text-lg font-semibold">Reviews</h1>
            <div className="border border-gray-200 rounded-xl">
              {/* top */}
              <div className="flex justify-between items-center p-4 border-b-[1px]">
                <div className="">
                  <h5 className="font-semibold">Overall rating</h5>
                  <div className="flex gap-2 items-center text-lg text-indigo-600">
                    <h3>4.2</h3>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <BiSolidStar
                          key={rating}
                          className={classNames(
                            restaurantRating > rating
                              ? "text-indigo-500"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600"> 3 votes</p>
                  </div>
                </div>
                <div className="">
                  <button
                    onClick={() => toast("Click")}
                    className="btn px-3 py-[10px]"
                  >
                    Leave review
                  </button>
                </div>
              </div>
              {/* main */}
              <div className=" ">
                <div>
                  <div className="">
                    {reviews.map((review, reviewIdx) => (
                      <div
                        key={review.id}
                        className="flex text-sm text-gray-500 space-x-4 border-b border-gray-200 px-4"
                      >
                        <div className="flex-none py-10 ">
                          <img
                            src={review.avatarSrc}
                            alt=""
                            className="w-10 h-10 bg-gray-100 rounded-full"
                          />
                        </div>
                        <div
                          className={classNames(
                            reviewIdx === 0 ? "" : "",
                            "flex-1 py-10"
                          )}
                        >
                          <h3 className="font-medium text-gray-900">
                            {review.author}
                          </h3>
                          <p>
                            <time dateTime={review.datetime}>
                              {review.date}
                            </time>
                          </p>

                          <div className="flex items-center mt-4">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <BiSolidStar
                                key={rating}
                                className={classNames(
                                  review.rating > rating
                                    ? "text-indigo-500"
                                    : "text-gray-300",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <div
                            className="mt-4 text-sm max-w-none text-gray-500"
                            dangerouslySetInnerHTML={{ __html: review.content }}
                          />
                        </div>
                      </div>
                    ))}
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

export default Restaurant;
