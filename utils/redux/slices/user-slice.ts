import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";
import { UserState } from "@/utils/types";

const initialState: UserState = {
  isCartOpen: false,
  showProductOverview: false,
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
    openProductOverview: (state, action: PayloadAction<boolean>) => {
      state.showProductOverview = action.payload;
    },
  },
});

export const { openCart, openProductOverview } = userSlice.actions;

// export const useCartServices =()=> useAppSelector((state:RootState) => state);

export default userSlice.reducer;
