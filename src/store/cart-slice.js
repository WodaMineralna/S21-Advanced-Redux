import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalQuantity: 0,
  changed: false,
};

function findIndex(arr, key, value) {
  return arr.findIndex((item) => item[key] === value);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.cart = action.payload.cart;
      state.totalQuantity = action.payload.totalQuantity;
    },

    addToCart(state, action) {
      state.totalQuantity++;
      state.changed = true;
      const indexOfDuplicate = findIndex(state.cart, "id", action.payload.id);
      if (indexOfDuplicate !== -1) state.cart[indexOfDuplicate].quantity++;
      else state.cart.push({ ...action.payload, quantity: 1 });
    },

    incrementQuantity(state, action) {
      state.totalQuantity++;
      state.changed = true;
      state.cart.find((item) => item.id === action.payload).quantity++;
    },

    decrementQuantity(state, action) {
      state.totalQuantity--;
      state.changed = true;
      const indexOfItem = findIndex(state.cart, "id", action.payload);
      if (state.cart[indexOfItem].quantity === 1)
        // remove the item when it has a quantity of 1
        state.cart.splice(indexOfItem, 1);
      else state.cart[indexOfItem].quantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
