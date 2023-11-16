import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";
import userReducer from "./slices/user-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import restaurantSlice from "./slices/restaurant-slice";
import { firebaseApi } from "./slices/api-slice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // restaurant:restaurantReducer,
    // Add the generated reducer as a specific top-level slice
    [firebaseApi.reducerPath]: firebaseApi.reducer,
    user: userReducer,
    restaurant: restaurantSlice,
  },
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
