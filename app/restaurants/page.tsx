"use client";
import { Categories, Restaurant } from "@/components";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineDown, AiOutlineCheckCircle } from "react-icons/ai";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Shortest Delivery", href: "#", current: false },
  // { name: "Delivery Time: High to Low", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const Restaurants = () => {
  return (
    <>
      <div className="sm:max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 max-w-[95%] relative">
        <div className="mt-10 mb-4 text-xl font-semibold ">
          <h1>All Restaurants</h1>
        </div>
        <Categories />
        <div className="flex justify-between mt-10 mb-4 text-sm font-semibold text-gray-600 ">
          <h1>Found 6 Restaurants</h1>
          <Menu as="div" className="relative inline-block z-50">
            <div className="flex">
              <Menu.Button className="group inline-flex justify-center text-sm items-center font-medium text-gray-700 hover:text-gray-900">
                Sort
                <AiOutlineDown className="flex-shrink-0 -mr-1 ml-1  text-gray-400 group-hover:text-gray-500" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <a
                          href={option.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "px-4 py-2 text-sm font-medium flex items-center justify-start"
                          )}
                        >
                          {option.name}
                          {option.current && (
                            <AiOutlineCheckCircle className="text-lg ml-2" />
                          )}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
          <Restaurant />
        </div>
        <nav
          aria-label="Pagination"
          className="mt-6 flex justify-between text-sm font-medium text-gray-700 "
        >
          <div className="min-w-0 flex-1">
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              Previous
            </a>
          </div>
          <div className="hidden space-x-2 sm:flex">
            {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              1
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              2
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-indigo-600 ring-1 ring-indigo-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              3
            </a>
            <span className="inline-flex items-center text-gray-500 px-1.5 h-10">
              ...
            </span>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              8
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              9
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              10
            </a>
          </div>
          <div className="min-w-0 flex-1 flex justify-end">
            <a
              href="#"
              className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
            >
              Next
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Restaurants;
