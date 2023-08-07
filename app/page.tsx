import { Categories, Hero, MenuTile, Restaurants, SeeMore } from "@/components";
import { foodArr } from "@/utils/ui-data";

export default function Home() {
  return (
    <>
      <div className="sm:max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 max-w-[95%] relative">
        <Hero />
        <Categories />
        <div className="mt-4">
          {/* menu header */}
          <div className="flex">
            <h1 className="text-2xl mb-2 font-semibold">Popular dishes</h1>
          </div>
          {/* menu items */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodArr.map((food) => (
              <MenuTile key={food.id} food={food} />
            ))}
          </div>
          <SeeMore />
        </div>
        <Restaurants />
      </div>
    </>
  );
}
