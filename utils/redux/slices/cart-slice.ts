import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "@/utils/types";
import { toast } from "react-hot-toast";
import { calculateTotal } from "@/utils/easy";
import { useAppSelector } from "../store";

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
  checkoutTotal: 0,
  checkoutItems: [],
  total: 0,
};

interface quantityProps {
  value: number;
  index: number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
    addToCart: (state, action: PayloadAction<any>) => {
      const indexOfItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (indexOfItem !== -1) {
        state.cartItems[indexOfItem].quantity += 1;
        state.total = calculateTotal(state.cartItems);
        toast.success("Item Quantity Updated");
        return;
      }
      toast.success("Added to cart");
      state.cartItems.push(action.payload);
      state.total = calculateTotal(state.cartItems);
    },
    setCheckoutItems: (state) => {
      state.checkoutItems = state.cartItems;
      state.checkoutTotal = calculateTotal(state.cartItems);
    },
    clearCheckoutItems: (state) => {
      state.checkoutItems = [];
      state.checkoutTotal = 0;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.total = calculateTotal(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
    updateQuantity: (state, action: PayloadAction<quantityProps>) => {
      state.cartItems[action.payload.index].quantity = action.payload.value;
      state.total = calculateTotal(state.cartItems);
    },
  },
});

export const {
  openCart,
  clearCart,
  removeFromCart,
  addToCart,
  updateQuantity,
  setCheckoutItems,
  clearCheckoutItems,
} = cartSlice.actions;

export const useCartServices = () => useAppSelector((state: any) => state);

export default cartSlice.reducer;
