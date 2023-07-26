import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";
import { CartItem, CartState } from "@/utils/types";
import { toast } from "react-hot-toast";
import { calulateTotal } from "@/utils/easy";

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
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
        state.total = calulateTotal(state.cartItems);
        toast.success("Item Quantity Updated");
        return;
      }
      toast.success("Added to cart");
      state.cartItems.push(action.payload);
      state.total = calulateTotal(state.cartItems);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.total = calulateTotal(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
    updateQuantity: (state, action: PayloadAction<quantityProps>) => {
      state.cartItems[action.payload.index].quantity = action.payload.value;
      state.total = calulateTotal(state.cartItems);
    },
  },
});

export const {
  openCart,
  clearCart,
  removeFromCart,
  addToCart,
  updateQuantity,
} = cartSlice.actions;

// export const useCartServices =()=> useAppSelector((state:RootState) => state);

export default cartSlice.reducer;
