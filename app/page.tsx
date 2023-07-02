import { Categories, Hero, Restaurants } from "@/components";

export default function Home() {
  return (
    <>
      <div className="sm:max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 max-w-[95%] relative">
        <Hero />
        <Categories />
        <Restaurants />
      </div>
    </>
  );
}
