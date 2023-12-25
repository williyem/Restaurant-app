export interface LogoProps {
  darkVersion?: boolean;
}

export interface categoryProps {
  name: string;
  img: string;
  id: number;
  handleClick: (arg0: number) => void;
}

export interface Category {
  name: string;
  img: string;
}
export interface RestaurantProps {
  restaurantObj: {
    imageUrl: string;
    avgMinutes: string;
    rating: string;
    category: Category;
    location: string;
    reviews: any[];
    phone: string;
    orderCount: number;
    name: string;
    id: string;
  };
}

export interface FoodObj {
  name: string;
  id: number;
  restaurant: string;
  description?: string;
  category?: string;
  price: number;
  discount: number;
  imageUrl: string;
  rating: number;
}

export interface ProductDetailsProps {
  quantity: number;
  setQuantity(value: number): void;
  size: number;
  setSize(value: number): void;
  foodObj?: FoodObj;
}

export interface CartItem extends FoodObj {
  quantity: number;
}

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
  checkoutTotal: number;
  checkoutItems: CartItem[];
  total: number;
}

export interface RestaurantState {
  selectedCategories: any[];
  selectedCategory: any | null;
  categories: any[];
  isDelivery: boolean;
}

export interface UserState {
  isCartOpen: boolean;
  showProductOverview: boolean;
  productObj?: FoodObj | {};
}

export type Inputs = {
  location?: string;
  password: string;
  email: string;
  phone: string;
  requests?: string;
};

export interface signUpProps {
  email: string;
  password: string;
  name: string;
  phone: string;
}
