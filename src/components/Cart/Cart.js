import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const isCartVisible = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.cart);

  if (!isCartVisible) return null;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={{
              ...item,
              total: item.quantity * item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
