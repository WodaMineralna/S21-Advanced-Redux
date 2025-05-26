import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemsAmount = useSelector((state) => state.cart.totalQuantity);

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
