import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemsQuantity = useSelector((state) => state.cart.totalQuantity);

  const showCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsQuantity}</span>
    </button>
  );
};

export default CartButton;
