import { orderArr, orderHeading } from "@/utils/ui-data";

import React from "react";

const statusDot = (status: string) => {
  if (status.toLowerCase() === "completed") {
    return "text-green-600 bg-green-50 rounded-full border border-green-600 px-2 shadow-sm shadow-green-200";
  }
  if (status.toLowerCase() === "in progress") {
    return "text-blue-600 bg-blue-50 rounded-full border border-blue-600 px-2 shadow-sm shadow-blue-200";
  }
  if (status.toLowerCase() === "en route") {
    return "text-yellow-600 bg-yellow-50 rounded-full border border-yellow-600 px-2 animate-bounce duration-100 shadow-sm shadow-yellow-200";
  }
  if (status.toLowerCase() === "cancelled") {
    return "text-red-600 bg-red-50 rounded-full border border-red-600 px-2 shadow-sm shadow-red-200";
  }

  return "text-yellow-600 bg-yellow-50 rounded-full border border-yellow-600 px-2 shadow-sm shadow-yellow-200";
};
const Table = () => {
  return (
    <>
      <section className="bg-gray-50  p-3 pb:8 sm:p-5 sm:pb-16 mt-[1px] min-h-screen">
        <div className="mx-auto max-w-7xl ">
          <div className=" pt-4 pb-1">
            <h1 className="mr-3 font-semibold ">My orders</h1>
            <p className="text-gray-500 ">Manage all your orders</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 pb-4 py-1">
            <div className="w-full md:w-1/2">
              <form className="flex items-center bg-white">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-white shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2      "
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="bg-white relative shadow-sm border-gray-200 sm:rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs font-semibold  text-gray-700 uppercase bg-[#e7e8ec]  ">
                  <tr>
                    {orderHeading.map((orderHeading, index) => (
                      <th scope="col" className="px-4 py-5" key={index}>
                        {orderHeading}
                      </th>
                    ))}

                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderArr.map((order) => (
                    <>
                      <tr className="border-b  text-gray-700" key={order.id}>
                        <td className="px-4 py-3">{order?.id}</td>
                        <td className="px-4 py-3 ">
                          <span className="rounded-2xl bg-[#e7e8ec] px-4 py-1.5">
                            {order?.restaurant}
                          </span>
                        </td>
                        <td className="px-4 py-3">{order?.branch}</td>

                        <td className="px-4 py-3">{order?.creationDate}</td>
                        <td className="px-4 py-3 flex space-x-2  items-center  capitalize">
                          <p className={statusDot(order.status)}>
                            {order?.status}
                          </p>
                        </td>
                        <td className="px-4 py-3">GHS {order?.amount}</td>

                        <td className="px-4 py-3 flex items-center ">
                          <button
                            id="apple-imac-27-dropdown-button"
                            data-dropdown-toggle="apple-imac-27-dropdown"
                            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none  "
                            type="button"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                          <div
                            id="apple-imac-27-dropdown"
                            className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow  "
                          >
                            <ul
                              className="py-1 text-sm text-gray-700 "
                              aria-labelledby="apple-imac-27-dropdown-button"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="block py-2 px-4 hover:bg-gray-100  "
                                >
                                  Show
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block py-2 px-4 hover:bg-gray-100  "
                                >
                                  Edit
                                </a>
                              </li>
                            </ul>
                            <div className="py-1">
                              <a
                                href="#"
                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100   "
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
              <span className="text-sm font-normal text-gray-500 ">
                Showing
                <span className="font-semibold text-gray-900 ">1-10</span>
                of
                <span className="font-semibold text-gray-900 ">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700    "
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700    "
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700    "
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700   "
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700    "
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700    "
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700    "
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export { Table };
