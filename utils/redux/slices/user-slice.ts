import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState, useAppSelector } from "../store";

export interface UserState {
  isCartOpen: boolean;
}

const initialState: UserState = {
  isCartOpen: false,
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state, action: PayloadAction<boolean>) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const { openCart } = userSlice.actions;

// export const useCartServices =()=> useAppSelector((state:RootState) => state);

export default userSlice.reducer;
