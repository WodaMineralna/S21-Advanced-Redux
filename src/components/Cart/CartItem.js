import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, title, quantity, price, total } = props.item;
  const dispatch = useDispatch();

  const incrementQuantityHandler = (id) => {
    dispatch(cartActions.incrementQuantity(id));
  };

  const decrementQuantityHandler = (id) => {
    dispatch(cartActions.decrementQuantity(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => incrementQuantityHandler(id)}>+</button>
          <button onClick={() => decrementQuantityHandler(id)}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
