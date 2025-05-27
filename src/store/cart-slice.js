import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const initialState = {
  cart: [],
  totalQuantity: 0,
};

function findIndex(arr, key, value) {
  return arr.findIndex((item) => item[key] === value);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.totalQuantity++;
      const indexOfDuplicate = findIndex(state.cart, "id", action.payload.id);
      if (indexOfDuplicate !== -1) state.cart[indexOfDuplicate].quantity++;
      else state.cart.push({ ...action.payload, quantity: 1 });
    },
    incrementQuantity(state, action) {
      state.totalQuantity++;
      state.cart.find((item) => item.id === action.payload).quantity++;
    },
    decrementQuantity(state, action) {
      state.totalQuantity--;
      const indexOfItem = findIndex(state.cart, "id", action.payload);
      if (state.cart[indexOfItem].quantity === 1)
        // remove the item when it has a quantity of 1
        state.cart.splice(indexOfItem, 1);
      else state.cart[indexOfItem].quantity--;
    },
  },
});

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://s21-advanced-redux-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully sent cart data!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `An error has occured: ${error}.`,
        })
      );
    }
  };
}

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
