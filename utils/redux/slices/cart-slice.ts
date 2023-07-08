import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState, useAppSelector } from '../store'

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

// export const useCartServices =()=> useAppSelector((state:RootState) => state);


export default cartSlice.reducer