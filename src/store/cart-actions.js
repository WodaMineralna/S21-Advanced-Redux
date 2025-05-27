import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

// if firebase somehow loses 'totalQuantitty'
function reduceTotalQuantity(arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue.quantity, 0);
}

export function fetchCartData() {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://s21-advanced-redux-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const resData = await response.json();

      return resData;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cart: cartData.cart || [],
          totalQuantity:
            cartData.totalQuantity || reduceTotalQuantity(cartData.cart),
        })
      );

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Successfully fetched cart data!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `An error has occured while fetching cart data!: ${error}.`,
        })
      );
    }
  };
}

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
          message: `An error has occured while sending cart data!: ${error}.`,
        })
      );
    }
  };
}
