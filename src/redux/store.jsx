import { configureStore } from "@reduxjs/toolkit";
import auth from "./slicers/AuthSlice";
import addRemove from "./slicers/CartSlicer";

export const store = configureStore({
  reducer: {
    auth: auth,
    handlecart:addRemove
  },
});
