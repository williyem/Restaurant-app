"use client";
import React from "react";
import { Category } from "./category";
import { categories } from "@/utils/ui-data";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/utils/redux/store";
import { setCategory} from "@/utils/redux/slices/restaurant-slice";

const Categories = () => {

  const dispatch = useDispatch<AppDispatch>()
  

  const handleClick =(id:number)=>{
dispatch(setCategory(id))
  }
  return (
    <>
      <div className="grid grid-cols-3 sm:gap-0 gap-2 sm:flex  sm:justify-between ">
        {categories.map((category) => {
          return (
            <>
              <Category
                name={category.name}
                key={category.id}
                id={category.id}
                img={category.img}
                handleClick={handleClick}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export { Categories };
