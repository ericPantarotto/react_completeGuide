import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';
import { useStrictModeDetector } from './utils/hookUtils';

let isInitial = true;
let loadNumber = 1;

function App() {
  const strictMode = useStrictModeDetector();

  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // const hasPageBeenRendered = useRef({ effect1: false, effect2: false });

  useEffect(() => {
    const sendCardData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );

      const response = await fetch(
        'https://reactredux-d73e0-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      // const responseData = await response.json();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Sent cart data successfully!',
        })
      );
    };

    // if (!hasPageBeenRendered.current['effect1']) {
    //   hasPageBeenRendered.current['effect1'] = true;
    //   return;
    // }

    if (strictMode && loadNumber < 2) {
      loadNumber++;
      return;
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCardData().catch(() => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [cart, dispatch, strictMode]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          tittle={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
