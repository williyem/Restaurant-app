import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";
import { RestaurantState } from "@/utils/types";
import { collection, addDoc } from "firebase/firestore";

const initialState: RestaurantState = {
  selectedCategories: [],
  categories: [],
  selectedCategory: 0,
  isDelivery: false,
};

export const restaurantSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.selectedCategory = action.payload;
    },
    setIsDelivery: (state, action: PayloadAction<boolean>) => {
      state.isDelivery = action.payload;
    },
  },
});

export const { setCategory, setIsDelivery } = restaurantSlice.actions;

export const useRestaurantServices = () =>
  useAppSelector((state: any) => state);

export default restaurantSlice.reducer;
