import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://reactredux-d73e0-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      console.error(err);
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Fetching cart data failed!',
        })
      );

      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 3000);
    }
  };
};

// NOTE: action creator function
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://reactredux-d73e0-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        } //HACK: not including changed attribute
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Sent cart data successfully!',
        })
      );

      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 3000);
    } catch (err) {
      console.error(err);
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Sending cart data failed!',
        })
      );

      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 3000);
    }
  };
};
