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
  price: number;
  discount: number;
  imageUrl: string;
  rating: number;
}

export interface CartItem extends FoodObj {
  quantity: number;
}

export interface CartState {
  isCartOpen: boolean;
  cartItems: CartItem[];
  total: number;
}

export interface RestaurantState {
  selectedCategories: any[];
  selectedCategory: any | null;
}

export interface UserState {
  isCartOpen: boolean;
  showProductOverview: boolean;
}
