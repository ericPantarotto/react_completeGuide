import { useContext } from 'react';
import useHttp from '../hooks/useHttp';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../utils/formatting';
import Error from './Error';
import Button from './UI/Button';
import Input from './UI/Input';
import Modal from './UI/Modal';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // body: JSON.stringify({
  //   order: {
  //     items: cartCtx.items,
  //     customer: customerData,
  //   },
  // }),
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp('http://localhost:3000/orders', requestConfig);
  // } = useHttp('http://localhost:3000/ordersXXX', requestConfig); //ERROR: simulating error

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => (totalPrice += item.quantity * item.price),
    0
  );

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  const handleFinish = () => {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  };

  /**
   * @param {Event} event
   */
  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );

    // console.log(customerData);
    // console.log(cartCtx.items);
    // fetch('http://localhost:3000/orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items: cartCtx.items,
    //       customer: customerData,
    //     },
    //   }),
    // });
  };

  const checkoutAction = async (fd) => {
    const customerData = Object.fromEntries(fd.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  };

  let actions = (
    <>
      <Button type='button' textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }
  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === 'checkout'}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details, via email within few
          minutes
        </p>
        <p className='modal-actions'>
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      {/* <form onSubmit={handleSubmit}> */}
      <form action={checkoutAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
        <Input
          label='Full Name'
          type='text'
          id='name'
          defaultValue='eric carlier'
        />
        <Input
          label='E-Mail Address'
          type='email'
          id='email'
          defaultValue='eric.carlier@test.com'
        />
        <Input
          label='Street'
          type='text'
          id='street'
          defaultValue='104, route arlon'
        />
        <div className='control-row'>
          <Input
            label='Postal Code'
            type='text'
            id='postal-code'
            defaultValue='1150'
          />
          <Input label='City' type='text' id='city' defaultValue='luxembourg' />
        </div>

        {error && <Error title='Faile to submit order.' message={error} />}
        <p className='modal-actions'>{actions}</p>
      </form>
    </Modal>
  );
}
