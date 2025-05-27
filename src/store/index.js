import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slice.js";
import uiReducer from "./ui-slice.js";

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});

export default store;
