import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart-slice";

function reduceTotalAmount(arr) {
  return arr.reduce(
    (amount, currentValue) => amount + currentValue.quantity,
    0
  );
}

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemsAmount = useSelector((state) => reduceTotalAmount(state.cart.cart)
  );

  const showCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsAmount}</span>
    </button>
  );
};

export default CartButton;
