import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";

export interface RestaurantState {
  selectedCategories: any[];
  selectedCategory: any | null;
}

const initialState: RestaurantState = {
  selectedCategories: [],
  selectedCategory:0,
};

export const restaurantSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // openCart: (state, action: PayloadAction<boolean>) => {
    //   state.isCartOpen = action.payload;
    // },
    setCategory: (state, action:PayloadAction<number>) => {
      state.selectedCategory = action.payload;
    }
  },
});

export const { setCategory} = restaurantSlice.actions;

// export const useCartServices =()=> useAppSelector((state:RootState) => state);

export default restaurantSlice.reducer;
