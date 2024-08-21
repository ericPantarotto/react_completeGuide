import { forwardRef } from 'react';

export default forwardRef(({ result, targetTime }, ref) => (
  <dialog ref={ref} className='result-modal'>
    <h2>You {result}</h2>
    <p>
      The target time was <strong>{targetTime} seconds.</strong>
    </p>
    <p>
      You stopped the timer with <strong>X seconds left.</strong>
    </p>
    <form method='dialog'>
      <button>Close</button>
    </form>
  </dialog>
));
