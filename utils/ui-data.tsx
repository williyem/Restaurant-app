import { GrStatusCriticalSmall } from "react-icons/gr";

export const navLinks = [
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "Restaurants",
    link: "/restaurants",
  },
  {
    id: 2,
    name: "My orders",
    link: "/orders",
  },
];

export const categories = [
  { id: 0, name: "Pizza", img: "/categories/pizza.png" },
  { id: 1, name: "Burger", img: "/categories/hamburger.png" },
  { id: 2, name: "BBQ", img: "/categories/skewer.png" },
  { id: 3, name: "Chicken", img: "/categories/fried-chicken.png" },
  { id: 5, name: "Rice", img: "/categories/fried-rice.png" },
  { id: 4, name: "Drinks", img: "/categories/soft-drink.png" },
];

export const foodObj = {
  id: 1,
  name: "Chicken BBQ",
  restaurant: "Royal Sushi House",
  price: 80,
  discount: 10,
  imageUrl: "",
  rating: "4.8",
};

export const restaurantArr = [
  {
    id: "1",
    imageUrl: "/products/restaurants/img.jpg",
    avgMinutes: "30-40 min",
    name: "Royal Pizza House",
    category: { name: "Pizza", img: "/categories/pizza.png" },
    rating: "5.0",
    reviews: [],
    location: "Osu",
    phone: "+233202342343",
    orderCount: 80,
  },
  {
    id: "2",
    imageUrl: "/products/restaurants/rest-1.jpg",
    avgMinutes: "30-40 min",
    name: "Calabasa",
    category: { name: "Pizza", img: "/categories/pizza.png" },
    rating: "4.5",
    reviews: [],
    location: "Osu",
    phone: "+233202342343",
    orderCount: 80,
  },
  {
    id: "3",
    imageUrl: "/products/restaurants/rest-2.jpg",
    avgMinutes: "30-40 min",
    name: "Flavor Fusion",
    category: { name: "Pizza", img: "/categories/pizza.png" },
    rating: "5.0",
    reviews: [],
    location: "Osu",
    phone: "+233202342343",
    orderCount: 80,
  },
  {
    id: "4",
    imageUrl: "/products/restaurants/rest-3.jpg",
    avgMinutes: "30-40 min",
    name: "The Charming Bistro",
    category: { name: "Pizza", img: "/categories/pizza.png" },
    rating: "4.0",
    reviews: [],
    location: "Osu",
    phone: "+233202342343",
    orderCount: 80,
  },
  {
    id: "5",
    imageUrl: "/products/restaurants/rest-4.jpg",
    avgMinutes: "30-40 min",
    name: "The Veggie Patch",
    category: { name: "Pizza", img: "/categories/pizza.png" },
    rating: "5.0",
    reviews: [],
    location: "Osu",
    phone: "+233202342343",
    orderCount: 80,
  },
  {
    id: "6",
    imageUrl: "/products/restaurants/rest-5.jpg",
    avgMinutes: "30-40 min",
    name: "The Juicy Burger",
    category: { name: "Pizza", img: "/categories/pizza.png" },
    rating: "5.0",
    reviews: [],
    location: "Osu",
    phone: "+233202342343",
    orderCount: 80,
  },
];

export const orderHeading = [
  "order ID",
  "restaurant",
  "branch",
  "creation date",
  "status",
  "amount ",
  "action",
];

export const orderArr = [
  {
    id: 1234234234,
    restaurant: "Pizza Hut",
    branch: "Osu",
    creationDate: "2021-01-01",
    status: "completed",
    amount: "100",
    orderItems: [],
  },
  {
    id: 223425323,
    restaurant: "chris maisons",
    branch: "Dansoman",
    creationDate: "2021-01-01",
    status: "completed",
    amount: "100",
    orderItems: [],
  },
  {
    id: 32342523,
    restaurant: "Pizza Hut",
    branch: "East Legon",
    creationDate: "2021-01-01",
    status: "completed",
    amount: "100",
    orderItems: [],
  },
  {
    id: 42342521,
    restaurant: "Burger Palace",
    branch: "Osu",
    creationDate: "2021-02-15",
    status: "en route",
    amount: "75",
    orderItems: [],
  },
  {
    id: 52342522,
    restaurant: "Sushi Express",
    branch: "Madina",
    creationDate: "2021-02-15",
    status: "cancelled",
    amount: "90",
    orderItems: [],
  },
  {
    id: 62342524,
    restaurant: "Taco Haven",
    branch: "Osu",
    creationDate: "2021-02-15",
    status: "in progress",
    amount: "55",
    orderItems: [],
  },
  {
    id: 72342525,
    restaurant: "Spice Paradise",
    branch: "Legon campus",
    creationDate: "2021-03-10",
    status: "completed",
    amount: "120",
    orderItems: [],
  },
  {
    id: 82342526,
    restaurant: "Italiano Eats",
    branch: "Osu",
    creationDate: "2021-03-10",
    status: "cancelled",
    amount: "65",
    orderItems: [],
  },
];

// export const statusDot = (status: string) => {
//   if (status.toLowerCase() === "completed") {
//     return <GrStatusCriticalSmall className={"mr-2 text-green-500"} />;
//   }
//   if (status.toLowerCase() === "in progress") {
//     return <GrStatusCriticalSmall className={"mr-2 text-blue-500"} />;
//   }
//   if (status.toLowerCase() === "en route") {
//     return "mr-2 text-yellow-500 animate-ping";
//   }
//   if (status.toLowerCase() === "cancelled") {
//     console.log("mr-2 text-yellow-34");
//     return "mr-2 text-red-500";
//   }

//   return "text-yellow-500";
// };
