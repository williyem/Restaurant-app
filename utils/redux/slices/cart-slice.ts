import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";
import { CartItem, CartState } from "@/utils/types";

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
    addToCart: (state, action: PayloadAction<any>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { openCart, clearCart, removeFromCart, addToCart } =
  cartSlice.actions;

// export const useCartServices =()=> useAppSelector((state:RootState) => state);

export default cartSlice.reducer;
