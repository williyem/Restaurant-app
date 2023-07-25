import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";
import restaurantReducer from "./slices/restaurant-slice";
import userReducer from "./slices/user-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import restaurantSlice from "./slices/restaurant-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // restaurant:restaurantReducer,
    user: userReducer,
    restaurant: restaurantSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
