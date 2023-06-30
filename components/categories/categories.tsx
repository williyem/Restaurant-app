import React from "react";
import { Category } from "./category";
import { categories } from "@/utils/ui-data";

const Categories = () => {
  return (
    <>
      <div className="flex  justify-between">
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
