import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";

export interface RestaurantState {
  selectedCategories: any[];
  selectedCategory: any;
}

const initialState: RestaurantState = {
  selectedCategories: [],
  selectedCategory:{}
};

export const restaurantSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // openCart: (state, action: PayloadAction<boolean>) => {
    //   state.isCartOpen = action.payload;
    // },
  },
});

export const { } = restaurantSlice.actions;

// export const useCartServices =()=> useAppSelector((state:RootState) => state);

export default restaurantSlice.reducer;
