"use client";
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FcSearch, FcMenu } from "react-icons/fc";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { navLinks } from "@/utils/ui-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Logo } from "./logo";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/utils/redux/store";
import { openCart } from "@/utils/redux/slices/cart-slice";
import { Toaster } from "react-hot-toast";
import { ProductOverview } from "./products/product-overview";
import { classNames } from "@/utils/easy";
import ModalOverlay from "./modal-overlay";
import Login from "./auth/login";
import Register from "./auth/register";
import { useAuthContext } from "@/utils/context/auth-context";

const NavBar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const [showModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const toggleCart = (value: boolean) => {
    dispatch(openCart(value));
  };
  const { showProductOverview, productObj } = useAppSelector(
    (state) => state.user
  );
  const { currentUser } = useAuthContext();
  return (
    <>
      {showModal ? (
        <ModalOverlay>
          <Login setModalOff={setShowModal} />
        </ModalOverlay>
      ) : null}
      {showRegisterModal ? (
        <ModalOverlay>
          <Register setModalOff={setShowRegisterModal} />
        </ModalOverlay>
      ) : null}
      {showProductOverview && <ProductOverview foodObj={productObj} />}
      <Toaster />
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex px-2 lg:px-0 items-center space-x-8">
                  <Logo />
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FcSearch
                          className="h-4 w-4 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-400 rounded-lg leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="hidden lg:ml-6 lg:flex lg:space-x-8 ">
                    {navLinks.map((item) => {
                      const { id, name, link } = item;
                      if (!currentUser && item?.protected) return;
                      return (
                        <Link
                          href={link}
                          key={id}
                          className={
                            pathname === link
                              ? "active__link font-bold"
                              : "nav__link font-bold"
                          }
                        >
                          {name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    {open ? (
                      <AiOutlineClose
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <FcMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <button
                    type="button"
                    onClick={() => toggleCart(true)}
                    className="group flex-shrink-0 bg-indigo-50 hover:bg-indigo-200 p-2   rounded-lg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <AiOutlineShoppingCart
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-600  "
                      aria-hidden="true"
                    />
                  </button>

                  {/* Profile dropdown */}
                  {currentUser ? (
                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                      <div>
                        <Menu.Button className="bg-white rounded-lg flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <Image
                            className="h-10 w-10 rounded-lg border-2 border-gray-300 outline-offset-4"
                            width={32}
                            height={32}
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
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
                        <Menu.Items className="origin-top-right z-20 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }: any) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }: any) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <>
                      <button
                        onClick={() => setShowModal(true)}
                        className="ml-4  flex space-x-1 rounded-md py-1 items-center relative flex-shrink-0 px-2 border border-indigo-400 hover:border-indigo-800 transition-all duration-200 ease-in-out cursor-pointer  text-indigo-600 hover:text-indigo-900  "
                      >
                        <p>Login</p>
                      </button>
                      <button
                        onClick={() => setShowRegisterModal(true)}
                        className="ml-4  flex space-x-1 rounded-md py-1 items-center relative flex-shrink-0 px-2 border hover:bg-indigo-700 bg-indigo-600 text-white transition-all duration-200 ease-in-out cursor-pointer  "
                      >
                        <p>sign up</p>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                {navLinks.map((item, index) => {
                  if (!currentUser && item?.protected) return;
                  return (
                    <Disclosure.Button
                      key={index}
                      as="a"
                      href={item.link}
                      className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                })}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      Tom Cook
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      tom@example.com
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                  </button>
                </div>
                <div className="mt-3 space-y-1 z-20">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export { NavBar };
