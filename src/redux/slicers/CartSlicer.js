import { createSlice } from "@reduxjs/toolkit";

const addRemoveSlicer = createSlice({
  name: "addRemove",
  initialState: {
    cart: [],
    totalPrice: 0,
    totalItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }

      state.totalPrice += item.salePrice;
      state.totalItems += 1;
    },
    removeFromCart: (state, action) => {
      const { itemId, isDeleted } = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === itemId
      );

      if (existingItem) {
        if (isDeleted) {
          state.totalPrice -= existingItem.salePrice * existingItem.quantity;
          state.totalItems -= existingItem.quantity;
          state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
        } else {
          existingItem.quantity -= 1;
          state.totalItems -= 1;
          state.totalPrice -= existingItem.salePrice;
          if (existingItem.quantity <= 0) {
            state.cart = state.cart.filter(
              (cartItem) => cartItem.id !== itemId
            );
          }
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart } = addRemoveSlicer.actions;
export default addRemoveSlicer.reducer;
