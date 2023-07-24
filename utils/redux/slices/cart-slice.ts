import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";
import { CartState } from "@/utils/types";

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
  },
});

export const { openCart } = cartSlice.actions;

// export const useCartServices =()=> useAppSelector((state:RootState) => state);

export default cartSlice.reducer;
