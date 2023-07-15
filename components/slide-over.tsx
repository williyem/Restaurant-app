"use client"
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose} from "react-icons/ai";
// import { useCartServices } from "@/utils/redux/slices/cart-slice";
import { AppDispatch, useAppSelector } from "@/utils/redux/store";
import { useDispatch } from "react-redux";
import { openCart } from "@/utils/redux/slices/cart-slice";

const SlideOver = ({children}:{
  children: React.ReactNode,
//   open:boolean,
//   setOpen:React.Dispatch<React.SetStateAction<boolean>>
})=> {
//   const [open, setOpen] = useState(true);
const  {isCartOpen}  = useAppSelector(state=> state.cart)


const dispatch = useDispatch<AppDispatch>()
const setOpen = (value:boolean)=>{
    dispatch(openCart(value))
}

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-50"
        onClose={setOpen}
      >
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
                <div className="flex h-full flex-col overflow-y-hidden bg-white pt-6 shadow-xl">
                  <div className="px-4 sm:px-6">
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
                         <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-1 px-4 sm:px-6 flex flex-col items-between justify-between h-full">
                    {children}
                   
                                </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}


export {SlideOver}




// BOTTOM 

            // <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            //   <div className="flex justify-between text-base font-medium text-gray-900">
            //     <p>Subtotal</p>
            //     <p>$262.00</p>
            //   </div>
            //   <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            //   <div className="mt-6">
            //     <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
            //   </div>
            //   <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            //     <p>
            //       or
            //       <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
            //         Continue Shopping
            //         <span aria-hidden="true"> &rarr;</span>
            //       </button>
            //     </p>
            //   </div>
            // </div>


            // items

            // <div className="mt-8">
            //     <div className="flow-root">
            //       <ul role="list" className="-my-6 divide-y divide-gray-200">
            //         <li className="flex py-6">
            //           <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            //             <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center"/>
            //           </div>

            //           <div className="ml-4 flex flex-1 flex-col">
            //             <div>
            //               <div className="flex justify-between text-base font-medium text-gray-900">
            //                 <h3>
            //                   <a href="#">Throwback Hip Bag</a>
            //                 </h3>
            //                 <p className="ml-4">$90.00</p>
            //               </div>
            //               <p className="mt-1 text-sm text-gray-500">Salmon</p>
            //             </div>
            //             <div className="flex flex-1 items-end justify-between text-sm">
            //               <p className="text-gray-500">Qty 1</p>

            //               <div className="flex">
            //                 <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            //               </div>
            //             </div>
            //           </div>
            //         </li>
            //         <li className="flex py-6">
            //           <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            //             <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center"/>
            //           </div>

            //           <div className="ml-4 flex flex-1 flex-col">
            //             <div>
            //               <div className="flex justify-between text-base font-medium text-gray-900">
            //                 <h3>
            //                   <a href="#">Medium Stuff Satchel</a>
            //                 </h3>
            //                 <p className="ml-4">$32.00</p>
            //               </div>
            //               <p className="mt-1 text-sm text-gray-500">Blue</p>
            //             </div>
            //             <div className="flex flex-1 items-end justify-between text-sm">
            //               <p className="text-gray-500">Qty 1</p>

            //               <div className="flex">
            //                 <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            //               </div>
            //             </div>
            //           </div>
            //         </li>

                 
            //       </ul>
            //     </div>
            //   </div>