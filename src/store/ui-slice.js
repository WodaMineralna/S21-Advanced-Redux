import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: true, // DEBUGGING, it should be 'false' at init
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        ...action.payload,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
