import { forwardRef } from 'react';

export default forwardRef(({ myInputs }, ref) => {
  const { name, email } = { ...myInputs };
  return (
    <dialog ref={ref} className='result-modal'>
      <h2>Your INPUTS</h2>
      <p>
        Your entered name was <strong>{name}.</strong>
      </p>
      <p>
        Your entered email was <strong>{email}.</strong>
      </p>
      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
});
