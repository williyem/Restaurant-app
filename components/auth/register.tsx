import React from "react";
import { Logo } from "../logo";
import { IoMdClose } from "react-icons/io";
import { SubmitHandler, Controller, useForm } from "react-hook-form";
import PhoneInputWithCountrySelect, {
  isValidPhoneNumber,
} from "react-phone-number-input";

import ButtonLoader from "../button-loader";
import { useAuthContext } from "@/utils/context/auth-context";

type Inputs = {
  email: string;
  password: string;
  //   phone: string;
  name: string;
};
interface Props {
  setModalOff: (bool: boolean) => void;
}

const Register = ({ setModalOff }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const { signup, loading } = useAuthContext();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signup(data, setModalOff);
  };
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3  sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg max-w-[100%] w-[500px] ">
          <IoMdClose
            onClick={() => setModalOff(false)}
            className="absolute text-xl right-4 top-4 hover:text-rose-500 duration-300 transition-all ease-in-out cursor-pointer"
          />
          <div className="max-w-md mx-auto">
            <div className="w-full mx-auto text-center flex items-center justify-center">
              <Logo />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Register</h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="divide-y divide-gray-200"
            >
              <div className=" p-4 text-base text-center leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                    name="name"
                    type="text"
                    className="peer placeholder-transparent h-12 w-full border-b-2 text-sm border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600"
                    placeholder="Name "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    full Name
                  </label>
                  <p className="text-left text-sm text-rose-600">
                    {errors.name?.message}
                  </p>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-12 w-full border-b-2 text-sm border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                  <p className="text-left text-sm text-rose-600">
                    {errors.email?.message}
                  </p>
                </div>
                {/* <div className="relative">
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "phone number is required",
                      validate: (value) => {
                        return (
                          isValidPhoneNumber(value) || "Invalid phone number"
                        );
                      },
                    }}
                    render={(prop) => {
                      return (
                        <PhoneInputWithCountrySelect
                          {...prop.field}
                          id="phone"
                          className="peer placeholder-transparent h-12 w-full border-b-2 text-sm border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600"
                          placeholder=""
                          defaultCountry="GH"
                        />
                      );
                    }}
                  />

                  <label
                    htmlFor="phone"
                    className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Phone Number
                  </label>
                  <p className="text-left text-sm text-rose-600">
                    {errors.phone?.message}
                  </p>
                </div> */}

                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                  <p className="text-left text-sm text-rose-600">
                    {errors.password?.message}
                  </p>
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-500 text-white rounded-md px-2 text-center py-1"
                  >
                    {loading ? <ButtonLoader /> : "Register"}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mb-6 flex items-center  w-full before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
            <p className="mx-4 mb-0 text-center  text-sm text-gray-400 font-semibold">
              or continue with
            </p>
          </div>
          <div className="w-full flex justify-center">
            <button className=" px-3 py-1 bg-gray-100 border  shadow-sm rounded-md flex items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.65308 7.3455L6.93858 9.755C7.82758 7.554 9.98058 6 12.5001 6C14.0296 6 15.4211 6.577 16.4806 7.5195L19.3091 4.691C17.5231 3.0265 15.1341 2 12.5001 2C8.65908 2 5.32808 4.1685 3.65308 7.3455Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.4999 22C15.0829 22 17.4299 21.0115 19.2044 19.404L16.1094 16.785C15.0717 17.5742 13.8036 18.001 12.4999 18C9.89891 18 7.69041 16.3415 6.85841 14.027L3.59741 16.5395C5.25241 19.778 8.61341 22 12.4999 22Z"
                  fill="#4CAF50"
                />
                <path
                  d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                  fill="#1976D2"
                />
              </svg>
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
