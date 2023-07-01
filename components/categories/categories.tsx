import React from "react";
import { Category } from "./category";
import { categories } from "@/utils/ui-data";

const Categories = () => {
  return (
    <>
      <div className="grid grid-cols-3 sm:gap-0 gap-2 sm:flex  sm:justify-between ">
        {categories.map((category) => {
          return (
            <>
              <Category
                name={category.name}
                key={category.id}
                img={category.img}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export { Categories };
