import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";
import { FoodObj, UserState } from "@/utils/types";
import { foodObj } from "@/utils/ui-data";

const initialState: UserState = {
  isCartOpen: false,
  showProductOverview: false,
  productObj: {},
};

interface productOverviewProps {
  showProductOverview: boolean;
  productObj?: FoodObj | {};
}
export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
    openProductOverview: (
      state,
      action: PayloadAction<productOverviewProps>
    ) => {
      if (action.payload.showProductOverview) {
        state.productObj = action.payload.productObj;
      } else {
        state.productObj = {};
      }
      state.showProductOverview = action.payload.showProductOverview;
    },
  },
});

export const { openCart, openProductOverview } = userSlice.actions;

// export const useCartServices =()=> useAppSelector((state:RootState) => state);

export default userSlice.reducer;
