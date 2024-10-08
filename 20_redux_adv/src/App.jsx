import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';
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
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (strictMode && loadNumber < 2) {
      loadNumber++;
      return;
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
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
