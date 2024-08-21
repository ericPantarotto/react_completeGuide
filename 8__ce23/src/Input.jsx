// TODO: Output label (received via props)
// TODO: "Forward" remaining props to <input> element
// TODO: Accept forwarded ref and "connect" it to the <input> element
import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, ...props }, ref) {
  return (
    <p className='control'>
      <label>{label}</label>

      <input {...props} ref={ref} />
    </p>
  );
});

export default Input;
