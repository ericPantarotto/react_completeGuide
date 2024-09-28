import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../utils/formatting';
import Button from './UI/Button';
import Input from './UI/Input';
import Modal from './UI/Modal';

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => (totalPrice += item.quantity * item.price),
    0
  );

  const handleClose = () => {
    userProgressCtx.hideCart();
  };

  /**
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    console.log(customerData);
    console.log(cartCtx.items);

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  };

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
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
        <p className='modal-actions'>
          <Button type='button' textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
