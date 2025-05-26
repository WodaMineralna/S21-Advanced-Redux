import { useSelector } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://s21-advanced-redux-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
