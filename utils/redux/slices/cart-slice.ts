import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface CartState {
  isCartOpen:boolean,
}

const initialState: CartState = {
  isCartOpen:false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart:(state, action:PayloadAction<boolean>)=>{
        state.isCartOpen = action.payload;
    }
    ,
     },
})


export const { openCart } = cartSlice.actions

export const useCartServices = (state:RootState) => state.cart;

export default cartSlice.reducer