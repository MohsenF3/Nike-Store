import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/CartSlice";
import authReducer from "../slices/authSlice";

const Store = configureStore({
  reducer: {
    auth: authReducer,
    cart: CartReducer,
  },
});

export default Store;
